import React, { Component } from 'react'
import '../css/LandingBody.css';
import Background from './Background';
import Footer from './Footer';
import {Helmet} from 'react-helmet';

class LandingBody extends Component {
   render() {
      return (
         <div class="parent-element">
             {/* <!-- Dynamic Title --> */}
             <Helmet>
                <title>Geeksforgeeks | KIIT - Home</title>
            </Helmet>
             <Background clipType="clipping-landing" overlayColor="bgcolor-landing"></Background>
             <div id="landing_title"> 
                <lable id="landing_title_right1">GeeksforGeeks</lable> <br/>
                <lable id="landing_title_right2">KIIT Chapter</lable> 
            </div>
          <h1 id="upcomingEvent">Upcoming Event</h1>
          <div id="landing_line_Event"></div>
          <div id="event">
            <div id="event_img">
                <div id="event_img_display"></div>
            </div>
              <div id="event_context">
                  <div id="event_content">
                      <div id="event_title">Code Rush 1.2</div>
                      <div id="event_desc">
                          <p>Hash Code is a team programming competition, organized by Google, for students and professionals around the world. You pick your team and programming language and we pick an engineering problem for you to solve. This year’s contest kicks off with an Online Qualification, where your team can compete virtually from wherever you’d like, alongside your virtual Hub. Top teams will then be invited to compete from our virtual World Finals.</p>
                          <p class="event_space"><b class="event_bold">TIME :</b> 7:00 - 9:00 PM </p>
                          <p class="event_space"><b class="event_bold">DATE :</b> 23-01-2021 </p>
                      </div>
                  </div>
                  <a href="/RegistrationForm" id="register_button">Register Now</a>
              </div>
          </div>
          <h1 id="landingProjectsDisplay">Projects</h1>
          <div id="landing_line_Project"></div>
          <div id="projects">
              <a href="/Projects" class="project_card">
                  <div class="project_img">
                      <div id="project_img_display1"></div>
                  </div>
                  <div class="project_title">The Geek Bot</div>
                  <div class="project_desc">
                    Our App-Dev Team started working on their 1st project, the Geek Bot. 
                    It possesses a programmer’s search feature that enables the users to search various programming concepts. 
                    Besides, it even returns the list of all ongoing coding events all around the world when called. 
                  </div>
              </a>
              <a href="/projects" class="project_card">
                  <div class="project_img">
                    <div id="project_img_display2"></div>
                  </div>
                  <div class="project_title">GeeksforGeeks KIIT Website</div>
                  <div class="project_desc">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi alias natus impedit beatae et! Corporis reprehenderit, quam optio quidem illo.
                  </div>
              </a>
          </div>
          <div id="landing_page_style"></div>
          <Footer bgColor="footer-landing"></Footer>
      </div>
      )
   }
}
export default LandingBody;