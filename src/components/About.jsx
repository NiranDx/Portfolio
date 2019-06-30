import React, { Component } from 'react'
import { Col, Image, ProgressBar } from 'react-bootstrap';
import './About.css';


export default class About extends Component {
  render() {
    return (
      <div>
        <div className="header-image">
        </div>

        <div className="headertitle"><h1>ABOUT ME</h1></div>

        <div className="title">
          <Image src="img/me.jpg" width="40%" height="40%" className="img"></Image>


          <div className="skills">
            <div className="padding">
              <strong>CSS</strong>
              <ProgressBar variant="info" now={80} />
            </div>

            <div className="padding">
              <strong>HTML</strong>
              <ProgressBar variant="info" now={60}/>
            </div>

            <div className="padding">
              <strong>JavaScript</strong>
              <ProgressBar variant="info" now={55} />
            </div>

            <div className="padding">
              <strong>C</strong>
              <ProgressBar variant="info" now={60} />
            </div>

            <div className="padding">
              <strong>Assembly</strong>
              <ProgressBar variant="info" now={75} />
            </div>


          </div>


          <div className="decrition">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;สวัสดีผมชื่อ นิรันดร์ สาสูเลาะ ชื่อเล่น ดิ่ง เรียนวิศวกรมมคอมพิวเตอร์ คณะวิศวกรรมศาสตร์ มหาวิทยาลัยสงขลานครินทร์วิทยาเขตภูเก็ต <br></br>
              เข้ากับคนง่าย ชอบช่วยเหลือเพื่อน มีความคิดสร้างสรรค์  ทำโปรเจคเกี่ยวกับ Website RFID and IOT เริ่มตั้งแต่รับปัญหา วางแผน ลงมือทำ และทดสอบ <br></br>
              ซึ่งผมจะมีทักษะทั้ง software และ hardware Software เช่น HTML CSS C JavaScript Hareware เช่น ออกแบบระบบด้าน hareware</p>
          </div>
        </div>


      </div>



    )
  }
}