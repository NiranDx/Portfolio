import React, { Component } from 'react'
import { Image, Form,Button } from 'react-bootstrap';
import './Contact.css';
class Contact extends Component {
    render() {
        return (
            <div>
                <div className="header-image">
                </div>
                <div className="background">
                    <h1 className="contact">CONTACT ME</h1>

                    <div className="row no-gutters d-flex">
                        <div className="col-md-3 d-flex">
                            <div className="container">
                                <Image src="img/placeholder.png" width="50" height="50"></Image>
                            </div>
                            <h2>Address</h2>
                            <p>Prince of Songkla University Phuket Campus</p>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="container">
                                <Image src="img/smartphone.png" width="50" height="50" ></Image>
                            </div>
                            <h2>Contact Number</h2>
                            <p>0807053688</p>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="container">
                                <Image src="img/email.png" width="50" height="50" ></Image>
                            </div>
                            <h2>Email Address</h2>
                            {/* <p><a href= "mailto:Niran3688@gmail.com?Subject=ติดต่อกลับ&amp;CC=Niran11@gmail.com&amp;BCC=Niran22@gmail.com&amp;body=กรุณาใส่ข้อความ">Click: Niran3688@gmail.com</a></p> */}

                            <p>Niran3688@gmail.com</p>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="container">
                                <Image src="img/speech-bubble.png" width="50" height="50" ></Image>
                            </div>
                            <h2>Social</h2>
                            <p><a href= "https://web.facebook.com/protex.sukeeding" className="fbContact">Facebook</a></p>
                          
                        </div>
                    </div>
                </div>

                {/* <div>
                    รอเพิ่มเติม
                </div> */}
            </div>
        )
    }
}
export default Contact;