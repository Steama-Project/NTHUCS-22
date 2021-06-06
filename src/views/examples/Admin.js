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
import AdminTab from "../IndexSections/AdminTab";
import { selectCurrentUser } from "views/redux/user/user-selector";
import { useSelector } from "react-redux";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

import FileDownload from "js-file-download";
import axios from "axios";

export default function LandingPage() {
  const currentUser = useSelector((state) => selectCurrentUser(state));
  const { token } = currentUser;

  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  }, []);

  const handleGenerateSchedule = () => {
    axios({
      url: "http://localhost:3001/question/download-report",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "GET",
      responseType: "blob", // Important
    }).then((response) => {
      FileDownload(response.data, "question_report.xlsx");
    });
  };
  return (
    <>
      <ExamplesNavbar />

      <div className="wrapper section section-tabs">
        <Container>
          <div className="content-center">
            <Row className="row-grid justify-content-between align-items-center text-left ml-auto mr-auto">
              <Col lg="12" md="0">
                {/* <Tabs/> */}
                <AdminTab />
                <Button
                  className="nav-link d-lg-block"
                  color="success"
                  size="lg"
                  style={{ margin: "20px" }}
                  onClick={handleGenerateSchedule}
                >
                  Download Excel Sheet
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}
