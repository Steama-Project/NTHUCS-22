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
import Game from "views/examples/Game"
import {selectCurrentUser} from './redux/user/user-selector';
import { useSelector } from "react-redux";

export default function Index() {

  const currentUser = useSelector(state => selectCurrentUser(state));

  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  },[]);
  return (
    <>
      <div className="wrapper">
        <div className="main">
          <Switch>
            <Route exact path="/components" render={(props) => currentUser? (<Redirect to ='/home-page'/> ) : (<Login {...props} />)} /> 
            <Route exact path="/home-page" render={(props) => currentUser? (<Home {...props}/> ) : (<Redirect to='/components' />)}/>
            <Route exact path="/register-page" render={(props) => currentUser? (<Redirect to ='/home-page'/> ) : (<Register {...props} />)} />
            <Route exact path="/game-page" render={(props) => !currentUser? (<Redirect to ='/components'/> ) : (<Game {...props} />)} />
            <Redirect from="/" to="/components" />
        </Switch>
        </div>
      </div>
    </>
  );
}
