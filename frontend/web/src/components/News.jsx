import React, { Component } from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css'

export default class News extends Component {
  render() {
    return (
      <div>
      <Image src="assets/bird-eye-view.jpg" className="header-image" />
      <Grid>
          <h2>News</h2>
          <Row>
             <Col xs={12} sm={8} className="main-section"> 
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               v
               </p>
               <p>scrambled it to make a type specimen book. It has survived not on
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               Lorem Ipsum is simply dummy text of the printing and typesetting 
               ndustry. Lorem Ipsum has been the industry's standard dummy text ever 
               ince the 1500s, when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book. It has survived not on
               v
              </p>
              </Col>
             <Col xs={12} sm={4} className="sidebar-section">
          
                <Image src="assets/dog-people.jpg"  />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting </p>
             </Col>
          </Row>  
      </Grid>
    </div>
       	
    )
  }
}
