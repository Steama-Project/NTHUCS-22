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
import classnames from "classnames";
import {
  selectSections,
  selectSections2,
  selectSections3,
  selectDisable
} from "../redux/question/question-selector";
import { useSelector } from "react-redux";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  Button,
  FormGroup,
  Label,
  Form,
  Input,
} from "reactstrap";

import ReactDatetime from "react-datetime";
import Accordeon from "../../components/accordeon/Accordeon";
import { selectCurrentUser } from "views/redux/user/user-selector";

import { useHistory } from "react-router-dom";

import Notification from "./Notification";

export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [sex, setSex] = React.useState("Male");
  const [dob, setDate] = React.useState("");
  const [city, setCity] = React.useState("Hsinchu");
  const [isDevelopingChild, setDevChil] = React.useState("Yes");
  const [isChildWithNeeds, setSpeNeeds] = React.useState("No");

  const sections = useSelector((state) => selectSections(state));
  const sections2 = useSelector((state) => selectSections2(state));
  const sections3 = useSelector((state) => selectSections3(state));

  const disable = useSelector((state) => selectDisable(state)) 

  const history = useHistory();

  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { token } = currentUser;

  const [notification, setNotification] = React.useState(false);

  const [disableSave, setDisableSave] = React.useState(false)

  const [modalMessage, setModalMessage] = React.useState("");

  const [which, setWhich] = React.useState("")


  const handleChange = (e) => {
    setDate(e.format("DD-MM-YYYY"));
  };

  const saveQuestion = (e) => {
    e.preventDefault();
    const postData = [...sections, ...sections2, ...sections3];
    fetch(`${process.env.REACT_APP_API}/question`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ questions: postData }),
    }).then(response => response.json())
    .then(data => {
      console.log(data.question._id)
      if(data.question._id){
         setNotification(true);
         setModalMessage(data.message);
         setWhich("Success")
         setTimeout(function(){ setNotification(false); }, 3000);
         setTimeout(function(){ history.push("/game-page"); }, 5000); 
      }
    });
  };

  const saveInfo = (e) => {
    e.preventDefault();
    const postInfo = { sex, city, dob, isDevelopingChild, isChildWithNeeds };
    fetch(`${process.env.REACT_APP_API}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(postInfo),
    }).then(response => response.json())
    .then(data => {
       if(data.response._id){
         setNotification(true);
         setDisableSave(true);
         setModalMessage(data.message);
         setWhich("Success")
         setTimeout(function(){ setNotification(false); }, 3000);   
       }
    }).catch((error) => {
      console.log(error)
      setNotification(true);
      setModalMessage(error);
      setWhich("Fail")
      setTimeout(function(){ setNotification(false); }, 3000);
    });
  };


  return (
    <div className="section section-tabs">
      <div></div>
      <Container>
      {
        notification && <Notification modalMessage={modalMessage} which={which}/>
      }
        <Row>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 1,
                      })}
                      onClick={(e) => setIconsTabs(1)}
                      style={{ cursor: "pointer" }}
                    >
                      <i className="tim-icons icon-spaceship" />
                      Personal Information
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <TabContent
                    className="tab-space"
                    activeTab={"link" + iconTabs}
                  >
                    <TabPane tabId="link1" style={{ color: "#525f7f" }}>
                      <FormGroup>
                        <Label for="exampleSelect1">Sex</Label>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect1"
                          value={sex}
                          onChange={(e) => setSex(e.target.value)}
                        >
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">Date of Birth</Label>
                        <ReactDatetime
                          timeFormat={false}
                          inputProps={{
                            placeholder: "Select date",
                            className: "form-control",
                          }}
                          onChange={handleChange}
                          
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">City you live</Label>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect2"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        >
                          <option>Hsinchu</option>
                          <option>Taipei</option>
                          <option>Taoyuan</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">
                          Typically developped children
                        </Label>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect3"
                          value={isDevelopingChild}
                          onChange={(e) => setDevChil(e.target.value)}
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">
                          Children with special needs
                        </Label>
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect4"
                          value={isDevelopingChild === "Yes"? "No": "Yes"}
                          onChange={(e) => setSpeNeeds(e.target.value)}
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </Input>
                      </FormGroup>
                    </TabPane>
                  </TabContent>
                </Form>
                <Button
                  className="nav-link d-lg-block"
                  color="primary"
                  onClick={saveInfo}    
                  disabled = {disableSave}        
                 >
                  {" "}
                  Save{" "}
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col className="ml-auto mr-auto" md="10" xl="6">
            <Card>
              <CardHeader>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 4,
                      })}
                      onClick={(e) => setTextTabs(4)}
                      style={{ cursor: "pointer" }}
                    >
                      Part1
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5,
                      })}
                      onClick={(e) => setTextTabs(5)}
                      style={{ cursor: "pointer" }}
                    >
                      Part2
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6,
                      })}
                      onClick={(e) => setTextTabs(6)}
                      style={{ cursor: "pointer" }}
                    >
                      Part3
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    {sections.map(
                      ({
                        questionText,
                        questionId,
                        id,
                        section,
                        ...otherProps
                      }) => (
                        <Accordeon
                          text={questionText}
                          key={id}
                          section={section}
                          questionId={questionId}
                          otherProps={otherProps}
                        />
                      )
                    )}
                  </TabPane>
                  <TabPane tabId="link5">
                    {sections2.map(
                      ({
                        questionText,
                        questionId,
                        id,
                        section,
                        ...otherProps
                      }) => (
                        <Accordeon
                          text={questionText}
                          key={id}
                          section={section}
                          questionId={questionId}
                          otherProps={otherProps}
                        />
                      )
                    )}
                  </TabPane>
                  <TabPane tabId="link6">
                    {sections3.map(
                      ({
                        questionText,
                        questionId,
                        id,
                        section,
                        ...otherProps
                      }) => (
                        <Accordeon
                          text={questionText}
                          key={id}
                          section={section}
                          questionId={questionId}
                          otherProps={otherProps}
                        />
                      )
                    )}
                  </TabPane>
                </TabContent>
                <Button
                  className="nav-link d-lg-block"
                  color="primary"
                  onClick={saveQuestion}
                  disabled = {disable}
                >
                  {" "}
                  Save{" "}
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
