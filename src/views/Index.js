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
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "views/IndexSections/Login.js";
import Home from "views/IndexSections/Home.js";
import Register from "views/IndexSections/Register";
import Game from "views/examples/Game";
import PictureGame from "views/examples/PictureGame";
import PictureGameTrial from "views/examples/PictureTrial";
import SoundGame from "./examples/SoundGame";
import { selectCurrentUser } from "./redux/user/user-selector";
import { useSelector } from "react-redux";
import SoundGameTrial from "./examples/SoundTrial";

import ProgressBar from "@badrap/bar-of-progress";

export default function Index() {
  const currentUser = useSelector((state) => selectCurrentUser(state));

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    for(let i=1; i<23; i++){
      new Image().src = require(`assets/game_pics/${i}-min_optimized.png`).default
    }
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);


  const progress = new ProgressBar({
    size:4,
    color:"#E14ECA",
    className:"z-50",
    delay:100,
  });

  progress.start();

  setTimeout(() => {
    progress.finish();
  }, 1000);

  return (
    <>
      <div className="wrapper">
        <div className="main">
          <Switch>
            <Route
              exact
              path="/components"
              render={(props) =>
                currentUser ? (
                  <Redirect to="/home-page" />
                ) : (
                  <Login {...props} />
                )
              }
            />
            <Route
              exact
              path="/home-page"
              render={(props) =>
                currentUser ? (
                  <Home {...props} />
                ) : (
                  <Redirect to="/components" />
                )
              }
            />
            <Route
              exact
              path="/register-page"
              render={(props) =>
                currentUser ? (
                  <Redirect to="/home-page" />
                ) : (
                  <Register {...props} />
                )
              }
            />
            <Route
              exact
              path="/game-page"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/components" />
                ) : (
                  <Game {...props} />
                )
              }
            />
            <Route
              exact
              path="/picture-game"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/components" />
                ) : (
                  <PictureGame {...props} />
                )
              }
            />
            <Route
              exact
              path="/picture-game-trial"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/components" />
                ) : (
                  <PictureGameTrial {...props} />
                )
              }
            />
            <Route
              exact
              path="/sound-game"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/components" />
                ) : (
                  <SoundGame {...props} />
                )
              }
            />
            <Route
              exact
              path="/sound-game-trial"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/components" />
                ) : (
                  <SoundGameTrial {...props} />
                )
              }
            />
            <Redirect from="/" to="/components" />
          </Switch>
        </div>
      </div>
    </>
  );
}
