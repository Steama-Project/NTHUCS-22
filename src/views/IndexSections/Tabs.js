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
  Table,
} from "reactstrap";

import ReactDatetime from "react-datetime";
import Accordeon from '../../components/accordeon/Accordeon'


export default function Tabs() {
  const [iconTabs, setIconsTabs] = React.useState(1);
  const [textTabs, setTextTabs] = React.useState(4);
  const [sex, setSex] = React.useState("Male");
  const [date, setDate] = React.useState("");
  const [city, setCity] = React.useState("Hsinchu");
  const [devChi, setDevChil] = React.useState("Yes");
  const [speNeeds, setSpeNeeds] = React.useState("Yes");


  const handleChange = (e) => {
    console.log(e.format("DD-MM-YYYY"));
    setDate(e.format("DD-MM-YYYY"))
  }

  console.log(city, devChi, speNeeds, sex, date);

  return (
    <div className="section section-tabs">
      <div>

      </div>
      <Container>
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
                      href="#pablo"
                    >
                      <i className="tim-icons icon-spaceship" />
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 2,
                      })}
                      onClick={(e) => setIconsTabs(2)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: iconTabs === 3,
                      })}
                      onClick={(e) => setIconsTabs(3)}
                      href="#pablo"
                    >
                      <i className="tim-icons icon-bag-16" />
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Form className="form">
                  <TabContent className="tab-space" activeTab={"link" + iconTabs}>
                    <TabPane tabId="link1" style={{ color: "#525f7f" }}>
                      <FormGroup>
                        <Label for="exampleSelect1">Sex</Label>
                        <Input type="select" name="select" id="exampleSelect1" value={sex} onChange={(e) => setSex(e.target.value)}>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Others</option>
                        </Input>
                      </FormGroup>


                      <FormGroup>
                        <Label for="exampleSelect1">Date of Birth</Label>
                        <ReactDatetime
                          timeFormat={false}
                          inputProps={{ placeholder: "Select date", className: "form-control", }}
                          onChange={handleChange}
                        />
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">City you live</Label>
                        <Input type="select" name="select" id="exampleSelect1" value={city} onChange={(e) => setCity(e.target.value)}>
                          <option>Hsinchu</option>
                          <option>Taipei</option>
                          <option>Taoyuan</option>
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="exampleSelect1">Typically developped children</Label>
                        <Input type="select" name="select" id="exampleSelect1" value={speNeeds} onChange={(e) => setSpeNeeds(e.target.value)}>
                          <option>Yes</option>
                          <option>No</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleSelect1">Children with special needs</Label>
                        <Input type="select" name="select" id="exampleSelect1" value={devChi} onChange={(e) => setDevChil(e.target.value)}>
                          <option>Yes</option>
                          <option>No</option>
                        </Input>
                      </FormGroup>
                    </TabPane>
                    <TabPane tabId="link2">
                      <p>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas. <br />
                        <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                    </TabPane>
                    <TabPane tabId="link3">
                      <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                      for real-time schemas. <br />
                        <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </p>
                    </TabPane>
                  </TabContent>
                </Form>
                <Button
                  className="nav-link d-lg-block"
                  color="primary"> Save </Button>
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
                      href="#pablo"
                    >
                      Profile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 5,
                      })}
                      onClick={(e) => setTextTabs(5)}
                      href="#pablo"
                    >
                      Settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: textTabs === 6,
                      })}
                      onClick={(e) => setTextTabs(6)}
                      href="#pablo"
                    >
                      Options
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <TabContent className="tab-space" activeTab={"link" + textTabs}>
                  <TabPane tabId="link4">
                    <Table responsive>
                      <tbody>
                      </tbody>
                    </Table>
                    <Accordeon text={`打斷或干擾別人(例如：插嘴或打斷別人的遊戲)`} />
                    <Table>
                    </Table>
                    <Accordeon text={`在遊戲中或團體活動中，無法排隊或等待輪流`} />
                    <Table>
                    </Table>
                    <Accordeon text={`因自己犯的錯或不適當的行為而怪罪別人`} />
                    <Table>
                    </Table>
                  </TabPane>
                  <TabPane tabId="link5">
                    <p>
                      I will be the leader of a company that ends up being worth
                      billions of dollars, because I got the answers. I
                      understand culture. I am the nucleus. I think that’s a
                      responsibility that I have, to push possibilities, to show
                      people, this is the level that things could be at. I think
                      that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at.
                    </p>
                  </TabPane>
                  <TabPane tabId="link6">
                    <p>
                      I think that’s a responsibility that I have, to push
                      possibilities, to show people, this is the level that
                      things could be at. So when you get something that has the
                      name Kanye West on it, it’s supposed to be pushing the
                      furthest possibilities. I will be the leader of a company
                      that ends up being worth billions of dollars, because I
                      got the answers. I understand culture. I am the nucleus.
                    </p>
                  </TabPane>
                </TabContent>
                <Button
                  className="nav-link d-lg-block"
                  color="primary"> Save </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
