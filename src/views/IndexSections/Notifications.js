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
// reactstrap components
import { UncontrolledAlert, Container } from "reactstrap";

export const  SucceedNotifications = () => {
  return (
    <div className="modal-header justify-content-center" id="notifications">
      <Container>
        <div />
        <UncontrolledAlert className="alert-with-icon" color="success">
          <span data-notify="icon" className="tim-icons icon-trophy" />
          <span>
            <b>Well done! -</b>
            This is a regular notification made with ".alert-success"
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
}

export const failedNotifications = () => {
  return (
    <div className="section section-notifications" id="notifications">
      <Container>
        <div />
        <UncontrolledAlert className="alert-with-icon" color="warning">
          <span data-notify="icon" className="tim-icons icon-bulb-63" />
          <span>
            <b>Warning! -</b>
            This is a regular notification made with ".alert-warning"
          </span>
        </UncontrolledAlert>
      </Container>
    </div>
  );
}
