import React, { Component } from 'react';
import { Navbar, Grid, Col, Image, Jumbotron } from 'react-bootstrap';
import './About.css'

export default class About extends Component {
  render() {
    return (

      <Jumbotron default collapseOnSelect>
        <section id="contact">
          <div className="row section-head">

            <div className="two columns header-col">

              <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">
            </div>

          </div>

          <div className="row">

            <div className="eight columns">


              <form action="" method="post" id="contactForm" name="contactForm">
                <fieldset>

                  <div>
                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                    <input type="text" value="" size="35" id="contactName" name="contactName" />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                    <input type="text" value="" size="35" id="contactEmail" name="contactEmail" />
                  </div>

                  <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input type="text" value="" size="35" id="contactSubject" name="contactSubject" />
                  </div>

                  <div>
                    <label for="contactMessage">Message <span className="required">*</span></label>
                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>

                </fieldset>
              </form>
            </div>


            <aside className="four columns footer-widgets">

              <div className="widget widget_contact">

              </div>

              <div className="widget widget_tweets">
              </div>

            </aside>

          </div>

        </section>
      </Jumbotron>


    )
  }
}
