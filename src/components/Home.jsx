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
              <h1>I'm Niran Sasooloh</h1>
              <p>Computer Engineering<span> | </span> PSU Phuket</p>
              <p>เว็บบนี้เป็นทดสอบโดยใช้ React</p>
              <button className="buttomContact"><a href="/contact" >Contact Me</a></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}