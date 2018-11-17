import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Tabs, Tab, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron className="jumbo">

          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

            <Tab eventKey={1} title="Need Help">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
              </Col>
                  <Col sm={10}>
                    <FormControl type="Name" placeholder="Name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Location
              </Col>
                  <Col sm={10}>
                    <FormControl type="Location" placeholder="Location" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} inline>
                    Time (From/To)
              </Col>

                  <Col sm={5} inline>
                    <FormControl type="Time" placeholder="From" />
                  </Col>

                  <Col sm={5} inline>
                    <FormControl type="Time" placeholder="To" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Language
              </Col>
                  <Col sm={10}>
                    <FormControl type="Language" placeholder="Language" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formControlTextarea">
                <Col componentClass={ControlLabel} sm={2}>
                  <ControlLabel>Type of Help Needed</ControlLabel>
                  </Col>
                  <Col sm={10}>
                    <FormControl componentClass="textarea" placeholder="Type of Help Needed" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={10} sm={2}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>;


            </Tab>
            <Tab eventKey={2} title="Help">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
              </Col>
                  <Col sm={10}>
                    <FormControl type="Name" placeholder="Name" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Location
              </Col>
                  <Col sm={10}>
                    <FormControl type="Location" placeholder="Location" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Radius
              </Col>
                  <Col sm={10}>
                    <FormControl type="Radius" placeholder="Radius" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} inline>
                    Time (From/To)
              </Col>

                  <Col sm={5} inline>
                    <FormControl type="Time" placeholder="From" />
                  </Col>

                  <Col sm={5} inline>
                    <FormControl type="Time" placeholder="To" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Language
              </Col>
                  <Col sm={10}>
                    <FormControl type="Language" placeholder="Language" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={10} sm={10}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>;
            </Tab>

          </Tabs>;

        </Jumbotron>

        {/* <Row className="show-grid text-center"  >
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic" />
            <h3>Jenny</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic" />
            <h3>Lily</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic" />
            <h3>Kevin</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting ndustry. </p>
          </Col>
        </Row> */}
      </Grid>
    );
  }
}
