import React, { useEffect, useState } from "react";

// reactstrap components
import { Row, Col, Container, Button } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";


import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import { red } from "@material-ui/core/colors";
import useInterval from "react-useinterval";
import ReactAudioPlayer from 'react-audio-player';
import { useHistory } from "react-router";

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

export default function SoundGameTrial() {
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


  useEffect(() => {
    intializeSampleSpace();
  }, []);

  const history = useHistory();

  const routeToPictureGameTrial = (e) => {
    e.preventDefault();
    history.push('/picture-game-trial')
  }

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
        //setPic(22); // set blank pic
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
      }
    }
  };

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
                    <ReactAudioPlayer
                        src={require(`assets/game_sounds/${pic}.wav`).default}
                        autoPlay
                        controls
                        volume={1}
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

                    { !gameStarted && <Button
                      variant="contained"
                      color="success"
                      className="nav-link d-lg-block"
                      disabled={!gameStarted?false:true}
                      onClick={routeToPictureGameTrial}
                    >
                      <i className="tim-icons icon-refresh-02" /> Picture Trial
                    </Button>}
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
