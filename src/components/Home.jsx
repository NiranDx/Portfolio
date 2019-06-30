import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="Info">
          <div className="container">
            <div className="Greeting">
              <strong><h1>I'm Niran Sasooloh</h1></strong>
              <p>Computer Engineering<span> | </span> PSU Phuket</p>
              <p>เว็บนี้เป็นเว็บทดทองเขียนโดยใช้ React และ CSS <br></br>ยังไม่เป็นเว็บที่ Responsive ยังไม่ได้ทำเกี่ยวกับระบบทำงาน</p>
              <Link to="/about"><button className="buttomContact" >ABOUT ME</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}