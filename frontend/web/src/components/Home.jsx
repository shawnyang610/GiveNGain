import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import { Jumbotron, Grid, Row, Col, Image, Button, Tabs, Tab, Form, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  getResumeData(){
    $.ajax({
      url:'http://www.givengaining.com/api/requester_submit',
      
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({});

      }.bind(this),
     
    });
    
  }

  componentDidMount(){
    this.getResumeData();
    // this.setResumeData();
  }

  render() {

    
    return (
      <Grid>
        <Jumbotron className="jumbo">
          <h3> Hi John!</h3>
          <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">

            <Tab eventKey={1} title="Need Help">
             <Form id = "myFormId"  horizontal>
            
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Name
              </Col>
                  <Col sm={10}>
                    <FormControl type="Name" placeholder="Name" value="John Doe"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Location
              </Col>
                  <Col sm={10}>
                    <FormControl type="Location" placeholder="Location" value="6530 Kissena Blvd, Flushing, NY 11367" />
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Date
              </Col>
                  <Col sm={10}>
                    <FormControl type="Text" placeholder="Date" value="11/17/2018"/>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalEmail">

                  <Col componentClass={ControlLabel} sm={2} >
                    Time (From/To)
              </Col>

                  <Col sm={5} >
                    <FormControl type="Text" placeholder="From" value ="12:00 PM"/>
                  </Col>

                  <Col sm={5} >
                    <FormControl type="Text" placeholder="To" value="06:00 PM"/>
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Language
              </Col>
                  <Col sm={10}>
                    <FormControl type="Language" placeholder="Language"/>
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

                <FormGroup >
                  <Col smOffset={10} sm={2}>
                    <Button type="submit">Submit</Button>
                  </Col>
                </FormGroup>
              </Form>


            </Tab>
            <Tab eventKey={2} title="Help">
              <Form action="http://www.givengaining.com/api/helper_submit" method="get" horizontal>
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
                    Distance
              </Col>
                  <Col sm={10}>
                    <FormControl type="Distance" placeholder="Distance" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Date
              </Col>
                  <Col sm={10}>
                    <FormControl type="Text" placeholder="Date" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} >
                    Time (From/To)
              </Col>

                  <Col sm={5} >
                    <FormControl type="Text" placeholder="From" />
                  </Col>

                  <Col sm={5} >
                    <FormControl type="Text" placeholder="To" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Desired Language
              </Col>
                  <Col sm={10}>
                    <FormControl type="Language" placeholder="Desired Language" />
                  </Col>
                </FormGroup>

                <FormGroup >
                  <Col smOffset={10} sm={10}>

                    <Button id = "mybt" value="Submitted" type="button" onclick='alert{"submitted"}' >Submit</Button>
                    
                  </Col>
                </FormGroup>
              </Form>
            </Tab>

          </Tabs>
        </Jumbotron>

      </Grid>
    );
  }
}
