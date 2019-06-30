import React, { Component } from 'react'
import { Col, Image, ProgressBar } from 'react-bootstrap';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className="header-image">
        </div>
        <div className="title">
          <div ><h1>About Me</h1></div>
          <Image src="img/me.jpg" width="40%" height="40%" className="img"></Image>


          <div className="skills">
            <strong>Photographer</strong>
            <ProgressBar variant="info" now={80} />
            
            <strong>Wedding</strong>
            <ProgressBar variant="info" now={60} />

            <strong>Events</strong>
            <ProgressBar variant="info" now={79} />

            <strong>Conferences</strong>
            <ProgressBar variant="info" now={90} />
          </div>


          <div className="decrition">
            <p>ชื่อนายนิรันดร์ สาสูเลาะ ชื่อเลน ดิ่ง</p>
          </div>
        </div>


      </div>



    )
  }
}