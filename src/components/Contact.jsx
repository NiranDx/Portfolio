import React, {Component} from 'react'
import {Image} from 'react-bootstrap';
import './Contact.css';
class Contact extends Component{
    render(){
        return(
            <div>
                <div className="header-image">
                                            </div>
                <h1>Contact Me</h1>

                <div className="row no-gutters d-flex contact-info">
                    <div className="col-md-3 d-flex">
                    <Image src="img/placeholder.png" width="20%" height="20%" ></Image>
                        <h2>Address</h2>
                        <p>Prince of Songkla University Phuket Campus</p>
                    </div>
                    <div className="col-md-3 d-flex">
                    <Image src="img/smartphone.png" width="20%" height="20%" ></Image>
                        <h2>Contact Number</h2>
                        <p>0807053688</p>
                    </div>
                    <div className="col-md-3 d-flex">
                    <Image src="img/email.png" width="20%" height="20%" ></Image>
                        <h2>Email Address</h2>
                        <p>Niran3688@gmail.com</p>
                    </div>
                    <div className="col-md-3 d-flex">
                    <Image src="img/speech-bubble.png" width="20%" height="20%" ></Image>
                        <h2>Social</h2>
                        <p>www.facebook.com/protex.sukeeding</p>
                    </div>
</div>
                <div>
                    พวก Github
                </div>
                    


                
            </div>
        )
    }
}
export default Contact;