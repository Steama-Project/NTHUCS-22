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
import { Row, Col, Container, Button } from "reactstrap";

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
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import PauseCircleFilledOutlinedIcon from '@material-ui/icons/PauseCircleFilledOutlined';

import Sound from 'react-sound';

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

export default function Game({handleSongLoading,handleSongPlaying,handleSongFinishedPlaying}) {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  //const { token } = currentUser;

  const [date, setDate] = React.useState("")

  const classes = useStyles();
  const [heartColor, setHeartColor] = React.useState("inherit")
  const [heartColor2, setHeartColor2] = React.useState("inherit")

  const [isPlaying, setIsPlaying] = React.useState(false);

    const month = new Date().toLocaleString('default', { month: 'long' });
    const year = new Date().getFullYear();
    const day = new Date().getDate();

    const new_date =  `${month} ${day}, ${year}`

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
                      “{currentUser.user.name}, you will hear some kinds of sounds in the following test. You don’t need to press the red button. When you hear a single-tone (plesase show the dingle-tone right away to help kid understan what is single-tone). You only need to press the red button, when you hear the other sounds (not single-tone). Please listen carefully, and try your best tp response as soon as possible.”
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" onClick={() => heartColor==="inherit"? setHeartColor("secondary"):setHeartColor("inherit")}>
                        <FavoriteIcon color={heartColor}/>
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button variant="contained" color="primary"  className='nav-link d-lg-block'>
                      <i className="tim-icons icon-tap-02"/>
                      {" "}
                          Take test
                      </Button>
                      <Button variant="contained" color="primary" className='nav-link d-lg-block'>
                      <i className="tim-icons icon-puzzle-10"/>
                        {" "}
                          Trial  
                      </Button>
                      <IconButton onClick={() => setIsPlaying(!isPlaying)}>
                        {!isPlaying? <PlayCircleFilledWhiteIcon fontSize="large" color='primary'/> : <PauseCircleFilledOutlinedIcon fontSize="large" color='primary'/>}                         
                      </IconButton>
                      <Sound
                          //url={`${process.env.REACT_APP_API}/Akon.mp3`}
                          url=""
                          playStatus={isPlaying?Sound.status.PLAYING:Sound.status.STOPPED}
                          playFromPosition={300}
                          onLoading={handleSongLoading}
                          onPlaying={handleSongPlaying}
                          onFinishedPlaying={handleSongFinishedPlaying}
                      />
                    </CardActions>
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
                      “{currentUser.user.name}, you will hear some kinds of sounds in the following test. You don’t need to press the red button. When you hear a single-tone (plesase show the dingle-tone right away to help kid understan what is single-tone). You only need to press the red button, when you hear the other sounds (not single-tone). Please listen carefully, and try your best tp response as soon as possible.”
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites" onClick={() => heartColor2==="inherit"? setHeartColor2("secondary"):setHeartColor2("inherit")}>
                        <FavoriteIcon color={heartColor2}/>
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <Button variant="contained" color="primary"  className='nav-link d-lg-block'>
                      <i className="tim-icons icon-tap-02"/>
                      {" "}
                          Take test
                      </Button>
                      <Button variant="contained" color="primary" className='nav-link d-lg-block'>
                      <i className="tim-icons icon-puzzle-10"/>
                        {" "}
                          Trial  
                      </Button>
                      <IconButton>
                        <PlayCircleFilledWhiteIcon fontSize="large" color='primary'/>    
                      </IconButton>
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
