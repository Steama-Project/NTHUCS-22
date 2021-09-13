/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react plugin used to create charts

// reactstrap components
import { Row, Col, Container, Button, CardFooter } from "reactstrap";

import { selectCurrentUser } from "views/redux/user/user-selector";
import { useSelector } from "react-redux";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { useHistory } from "react-router-dom";

import Speech from 'react-speech';

import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    marginTop: 20,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 20,
    width: 20,
  },
}));




export default function Game() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  
  const [date, setDate] = React.useState("")

  const classes = useStyles();
  const [heartColor, setHeartColor] = React.useState("inherit")
  const [heartColor2, setHeartColor2] = React.useState("inherit")


    const month = new Date().toLocaleString('default', { month: 'long' });
    const year = new Date().getFullYear();
    const day = new Date().getDate();

    const history = useHistory();

  
    const new_date =  `${month} ${day}, ${year}`
    const text_to_Speech = `${currentUser.user.name}, you will hear some kinds of sounds in the following test. You don’t need to press the red button when you hear a single-tone. You only need to press the red button when you hear the other sounds (not single-tone). Please listen carefully, and try your best to response as soon as possible.`

    const text_to_Speech1 = `${currentUser.user.name}, you will see some pictures in the following test. You don’t need to press the red button, when you see a Prohibit picture. You only need to press the red button , when you see a target picture. Please look carefully, and try your best to response as fast as possible.`
    
    const routeToPictureGame = (e) => {
      e.preventDefault();
      history.push('/picture-game')
    }

    const routeToPictureGameTrial = (e) => {
      e.preventDefault();
      history.push('/picture-game-trial')
    }

    const routeToSoundGame = (e) => {
      e.preventDefault();
      history.push('/sound-game')
    }

    const routeToSoundGameTrial = (e) => {
      e.preventDefault();
      history.push('/sound-game-trial')
    }


  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    setDate(new_date);
    
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, [new_date]);

  return (
    <>
    <ExamplesNavbar />
      <div className="wrapper section section-tabs">
        <Container>
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left ml-auto mr-auto">
              <Col className="ml-auto mr-auto" md="10" xl="6">
               
                <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {currentUser.user.name[0]}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Visual Attention Test"
                      subheader={date}
                    />
                    <CardMedia
                      className={classes.media}
                      image="https://childdevelopment.com.au/wp-content/uploads/fine-motor-visual-perception.jpg"
                      title="Kid Images1"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p" align="justify"> 
                      "{text_to_Speech1}"
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" onClick={() => heartColor==="inherit"? setHeartColor("secondary"):setHeartColor("inherit")}>
                        <FavoriteIcon color={heartColor}/>
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      
                      <Button 
                      variant="contained" 
                      color="primary"  
                      className='nav-link d-lg-block'
                      onClick={routeToPictureGame}
                      >
                      <i className="tim-icons icon-tap-02"/>
                      {" "}
                          Take test
                      </Button>
                      <Button 
                        variant="contained" 
                        color="primary" 
                        className='nav-link d-lg-block'
                        onClick={routeToPictureGameTrial}
                        >
                      <i className="tim-icons icon-puzzle-10"/>
                        {" "}
                          Trial  
                      </Button>
                    </CardActions>
   
                    <CardFooter>
                    <Speech 
                            text={text_to_Speech1}
                            voice ="Daniel"                   
                            textAsButton={true}
                            displayText="Play"
                            lang= "EN-US"
                          />
                    </CardFooter>
                </Card>                
              </Col>


              <Col className="ml-auto mr-auto" md="10" xl="6">
               <Card className={classes.root}>
                    <CardHeader
                      avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                          {currentUser.user.name[0]}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      title="Listening Attention Test"
                      subheader={date}
                    />
                    <CardMedia
                      className={classes.media}
                      image="https://www.phocuswire.com/uploadedImages/Articles/Opinion/2019/May/facebook-active-listening.jpg?width=600&height=300&scale=both&mode=crop"
                      title="Kids Image2"
                    />
                    <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p" align="justify">
                      "{text_to_Speech}"
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" onClick={() => heartColor2==="inherit"? setHeartColor2("secondary"):setHeartColor2("inherit")}>
                        <FavoriteIcon color={heartColor2}/>
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button 
                      variant="contained" 
                      color="primary"  
                      className='nav-link d-lg-block'
                      onClick={routeToSoundGame}
                      >
                      <i className="tim-icons icon-tap-02"/>
                      {" "}
                          Take test
                      </Button>
                      <Button 
                      variant="contained" 
                      color="primary" 
                      className='nav-link d-lg-block'
                      onClick={routeToSoundGameTrial}
                      >
                      <i className="tim-icons icon-puzzle-10"/>
                        {" "}
                          Trial  
                      </Button>
                    </CardActions>

                    <CardFooter>
                    <Speech 
                            text={text_to_Speech}
                            voice ="Daniel"                   
                            textAsButton={true}
                            displayText="Play"
                            lang= "EN-US"         
                          />
                    </CardFooter>
                </Card>  
              </Col>
            </Row>
            
          </div>
        </Container>
      </div>
    </>
  );
}
