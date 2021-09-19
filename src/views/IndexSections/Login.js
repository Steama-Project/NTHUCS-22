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
import { Link } from "react-router-dom";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import CircularProgress from "../../components/ProgressSpinner/ProgessSpinner"

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Modal,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useDispatch } from "react-redux";
import setCurrentUser from "../redux/user/user-action";


export default function Signup() {
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [demoModal, setDemoModal] = React.useState(false);
  const [modalMessage, setmodalMessage] = React.useState({});
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = React.useState(false)

  const data = {
    email: email,
    password: password,
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const loginUser = async () => {
          setIsLoading(true)
         await fetch(`${process.env.REACT_APP_API}/users/login`, {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
              })
                .then((response) => response.json())
                .then((response) => {
                  if (response.user?._id) {
                    setIsLoading(false)
                    dispatch(setCurrentUser(response));       
                  } else {
                    setmodalMessage(response.message);
                    setDemoModal(true);
                    setIsLoading(false)
                  }
                })
                .catch((err) => console.log(err));         
    }

     loginUser();
  };

  return (
    <>
      <ExamplesNavbar Login />
      <div className="section section-signup">
        <Container>
          <div className="squares square-1" />
          <div className="squares square-2" />
          <div className="squares square-3" />
          <div className="squares square-4" />
          <Modal isOpen={demoModal}>
            <div className="modal-header justify-content-center">
              <button className="close" onClick={() => setDemoModal(false)}>
                <i className="tim-icons icon-simple-remove" />
              </button>
              <h4 className="title title-up">Login Error</h4>
            </div>
            <div className="modal-body">
              <p>{modalMessage}</p>
            </div>
            <div className="modal-footer">
              <Button
                color="neutral"
                type="button"
                style={{ cursor: "default" }}
              ></Button>
              <Button
                color="danger"
                type="button"
                onClick={() => setDemoModal(false)}
              >
                Close
              </Button>
              <Button
                color="neutral"
                type="button"
                style={{ cursor: "default" }}
              ></Button>
            </div>
          </Modal>
          <Row className="row-grid justify-content-between align-items-center">
            <Col lg="6">
              <h3 className="display-3 text-white">
                Steama Web Application{" "}
                <span className="text-white">Design for the kids</span>
              </h3>
              <p className="text-white mb-3">
                This web app is design to gather simulated data to help identify kids with visual and listening impairment. Please create an account if you are new user.
              </p>
              <div className="btn-wrapper">
                <Button color="primary" to="register-page" tag={Link}>
                  Register Page
                </Button>
              </div>
            </Col>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("assets/img/square-purple-1.png").default}
                  />
                  <CardTitle tag="h4">Login</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form className="form" onSubmit={handleLogin}>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": emailFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        value={email}
                        onFocus={(e) => setEmailFocus(true)}
                        onBlur={(e) => setEmailFocus(false)}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": passwordFocus,
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onFocus={(e) => setPasswordFocus(true)}
                        onBlur={(e) => setPasswordFocus(false)}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </InputGroup>
                    <FormGroup check className="text-left">
                      <Label check>
                        <Input type="checkbox" />
                        <span className="form-check-sign" />I agree to the{" "}
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          terms and conditions
                        </a>
                        .
                      </Label>
                    </FormGroup>
                    <Button
                      type="submit"
                      className="btn-round"
                      color="primary"
                      size="sm"
                      style={{ display: "none" }}
                    ></Button>
                  </Form>
                </CardBody>
                <CardFooter >
                  <Button
                    onClick={handleLogin}
                    className="btn-round"
                    color="primary"
                    size="lg"
                    disabled = {isLoading}
                    style = {{display :"inline-flex"}}
                  >
                    <span style={{paddingRight:"10px"}}> { isLoading? <CircularProgress/>:"" }</span>              
                    <span> { isLoading? "Login...": "Get Started" } </span>
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
