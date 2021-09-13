import React, { useEffect, useState } from "react";

// reactstrap components
import { Row, Col, Container, Button } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import { useSelector } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import useInterval from "react-useinterval";
import { selectCurrentUser } from "views/redux/user/user-selector";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    marginTop: 20,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },

  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  timer: {
    color: red,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 20,
    width: 20,
  },
}));

export default function PictureGame() {
  const classes = useStyles();
  const [pic, setPic] = useState();
  const [sampleSpace, setSampleSpace] = useState([]);
  const [gameStarted, setgameStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [counter, setCounter] = useState(0);
  const [stimulusShownDurationCounter, setStimulusShownDurationCounter] =
    useState(0);
  const [stimulusIntervalDurationCounter, setStimulusIntervalDurationCounter] =
    useState(0);
  const [displayedPicturesCounter, setDisplayedPicturesCounter] = useState(0);
  const [intervalOrder, ] = useState([1000, 3000, 1500]);
  const [currentInterval, setCurrentInterval] = useState(1000);
  const [currentPictureType, setCurrentPictureType] = useState();
  const [playButtonClicked, setPlayButtonClicked] = useState(false);
  const [gameData, ] = useState([]);

  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { token } = currentUser;

  useEffect(() => {
    intializeSampleSpace();
  }, []);

  const savePictureApi = (data) => {
    fetch(`${process.env.REACT_APP_API}/picture`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  };

  const intializeSampleSpace = () => {
    const weightedData = [
      ["Target", 4],
      ["Prohibit", 1],
    ];
    const sampleSpace = [];
    weightedData.forEach((dataItem) => {
      for (let j = 0; j < dataItem[1]; ++j) {
        sampleSpace.push(dataItem[0]);
      }
    });
    setSampleSpace(sampleSpace);
  };

  const startTest = () => {
    setgameStarted(true);
    getNextPic();
  };

  const picShowCounter = () => {
    if (gameStarted) {
      setCounter(counter + 1);
      setStimulusShownDurationCounter(stimulusShownDurationCounter + 1);
      setStimulusIntervalDurationCounter(stimulusIntervalDurationCounter + 1);

      if (stimulusShownDurationCounter === 250) {
        setStimulusIntervalDurationCounter(0);
        setPic(22); // set blank pic
      }
      handleStimulusInterval(currentInterval);

      // stopwatch
      if (counter % 1000 === 0) {
        setSeconds(seconds + 1);
      }
    }
  };

  const handleStimulusInterval = (currentStimulusDuration) => {
    if (stimulusIntervalDurationCounter === currentStimulusDuration) {
      setStimulusShownDurationCounter(0);
      recordInteraction(false);
      getNextPic();

      if (displayedPicturesCounter % 20 === 0) {
        let nextInterval = intervalOrder.pop();
        setCurrentInterval(nextInterval);
        intervalOrder.splice(0, 0, nextInterval);
      }
    }
  };

  useInterval(picShowCounter, 1);

  const getNextPic = () => {
    let randomIndex = Math.floor(Math.random() * sampleSpace.length);
    const pictureType = sampleSpace.splice(randomIndex, 1)[0];
    if (pictureType === "Target") {
      let randomPicIndex = Math.floor(Math.random() * 20) + 1;
      setPic(randomPicIndex);
      setCurrentPictureType("Target");
    } else {
      setPic(21);
      setCurrentPictureType("Prohibit");
    }

    setDisplayedPicturesCounter(displayedPicturesCounter + 1);
    setPlayButtonClicked(false);
  };

  const recordInteraction = (clickedByUser) => {
    if (!playButtonClicked) {
      let data = {
        trial: displayedPicturesCounter,
        playButtonClicked: clickedByUser,
        playButtonClickedTimestamp: clickedByUser
          ? stimulusShownDurationCounter
          : null,
        currentPictureType,
      };

      gameData.push(data);
      setPlayButtonClicked(true);
      if (sampleSpace.length === 0) {
        setgameStarted(false);
        calC();
      }
    }
  };

  const calC = () => {
    const arraySum1 = [0,0,0,0]; // condition a should press and press
    const arraySum2 = [0,0,0,0]; // condition b should press and not press
    const arraySum3 = [0,0,0,0]; // condition c should not press press
    const arraySum4 = [0,0,0,0]; // condition d should not press and not press
    
    const meanSum1 = [0,0,0,0]; // case a
    const meanSum2 = [0,0,0,0]; // case c
    const meanSumTotal = [0,0,0,0]; // case a,c
    const impulseTime100 = [0,0,0,0]; // impulse time less than 100 seconds

    gameData.forEach((item, index) => {
      if(item.currentPictureType === "Target" && item.playButtonClicked === true){
        if(item.playButtonClickedTimestamp <= 100) saveImpulseTime100(impulseTime100, index, item.playButtonClickedTimestamp);
        calculateSum(arraySum1, index);
        calculateMean(meanSum1, index, item.playButtonClickedTimestamp);  
      }
      else if(item.currentPictureType === "Target" && item.playButtonClicked === false){
        calculateSum(arraySum2, index);
      }
      else if(item.currentPictureType === "Prohibit" && item.playButtonClicked === true){
        if(item.playButtonClickedTimestamp <=100) saveImpulseTime100(impulseTime100, index, item.playButtonClickedTimestamp);
        calculateSum(arraySum3, index);
        calculateMean(meanSum2, index, item.playButtonClickedTimestamp); 
      }
      else if(item.currentPictureType === "Prohibit" && item.playButtonClicked === false){
       calculateSum(arraySum4, index);
      }
    });
    
    for(let i=0; i<meanSum1.length; i++){
      meanSum1[i] = !(arraySum1[i] === 0) ? meanSum1[i] / arraySum1[i] : 0;
    }
    for(let i=0; i<meanSum2.length; i++){
      meanSum2[i] = !(arraySum3[i] === 0)? meanSum2[i] / arraySum3[i] : 0;
    }

    for(let i=0; i<meanSumTotal.length; i++){
      meanSumTotal[i] = !(arraySum1[i] + arraySum3[i] === 0)? (meanSum1[i] + meanSum2[i]) / (arraySum1[i] + arraySum3[i]):0;
    }

    // calculate the total sum for each 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const data = {
      picturesData:{
      condition1: {
        total: arraySum1.reduce(reducer,0),
        quarter1: arraySum1[0],
        quarter2: arraySum1[1],
        quarter3: arraySum1[2],
        quarter4: arraySum1[3]
      },
      condition2: {
        total: arraySum2.reduce(reducer,0),
        quarter1: arraySum2[0],
        quarter2: arraySum2[1],
        quarter3: arraySum2[2],
        quarter4: arraySum2[3]
      },
      condition3: {
        total: arraySum3.reduce(reducer,0),
        quarter1: arraySum3[0],
        quarter2: arraySum3[1],
        quarter3: arraySum3[2],
        quarter4: arraySum3[3]
      },
      condition4: {
        total: arraySum4.reduce(reducer,0),
        quarter1: arraySum4[0],
        quarter2: arraySum4[1],
        quarter3: arraySum4[2],
        quarter4: arraySum4[3]
      },
      impulseTime100: {
        total: impulseTime100.reduce(reducer,0),
        quarter1: impulseTime100[0],
        quarter2: impulseTime100[1],
        quarter3: impulseTime100[2],
        quarter4: impulseTime100[3]
      },
      totalMeanReaction: {
        total: Math.round(meanSumTotal.reduce(reducer,0)),
        quarter1: Math.round(meanSumTotal[0]),
        quarter2: Math.round(meanSumTotal[1]),
        quarter3: Math.round(meanSumTotal[2]),
        quarter4: Math.round(meanSumTotal[3])
      },
      meanReaction: {
        total: Math.round(meanSum1.reduce(reducer,0)),
        quarter1: Math.round(meanSum1[0]),
        quarter2: Math.round(meanSum1[1]),
        quarter3: Math.round(meanSum1[2]),
        quarter4: Math.round(meanSum1[3])
      }
    },
    }
    // you can console data here to check correctness
    savePictureApi(data);
  };

  // calculate impulse time when reaction time is less than 100 seconds
  const saveImpulseTime100 = (impulseTime100, index, reactionTime) => {
    if(index <= 30){
      impulseTime100[0] = impulseTime100[0]+1;
    }
    else if(index >= 31 && index <= 60 ){
      impulseTime100[1] = impulseTime100[1]+1;
    }
    else if(index >= 61 && index <= 90 ){
      impulseTime100[2] = impulseTime100[2]+1;
    }else{
      impulseTime100[3] = impulseTime100[3]+1;
    }  
  }

  // calculate mean for reaction time for condition a and c
  const calculateMean = (meanSum, index, reactionTime) => {
    if(index <= 30){
      meanSum[0] = meanSum[0]+reactionTime;
    }
    else if(index >= 31 && index <= 60 ){
      meanSum[1] = meanSum[1]+reactionTime;
    }
    else if(index >= 61 && index <= 90 ){
      meanSum[2] = meanSum[2]+reactionTime;
    }else{
      meanSum[3] = meanSum[3]+reactionTime;
    }    

  }

  // calculate sum 
  const calculateSum = (array, index) => {
    if(index <= 30){
      array[0] = array[0]+1;
    }
    else if(index >= 31 && index <= 60 ){
      array[1] = array[1]+1;
    }
    else if(index >= 61 && index <= 90 ){
      array[2] = array[2]+1;
    }else{
      array[3] = array[3]+1;
    }
  }

  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper section section-tabs">
        <Container>
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left ml-auto mr-auto">
              <Col className="ml-auto mr-auto" md="10" xl="8">
                <Card className={classes.root}>
                  {gameStarted && (
                    <CardMedia
                      className={classes.media}
                      image={require(`assets/game_pics/${pic}-min_optimized.png`).default}
                      title="Kid Images1"
                    />
                  )}
                  <CardContent></CardContent>
                  <CardActions disableSpacing>
                    <Button
                      variant="contained"
                      color="primary"
                      className="nav-link d-lg-block"
                      onClick={startTest}
                      disabled={gameStarted}
                    >
                      <i className="tim-icons icon-tap-02" /> Start
                    </Button>

                    <Button
                      variant="contained"
                      color="danger"
                      className="nav-link d-lg-block"
                      disabled={!gameStarted}
                      onClick={() => recordInteraction(true)}
                    >
                      <i className="tim-icons icon-tap-02" /> Press
                    </Button>
                  </CardActions>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
