import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Form, Button, FormControl } from 'react-bootstrap';
import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <div className="div1">
                    <h1 className="Logo"><a href="/">NIRAN</a></h1>
                </div>
                <div >
                    <nav>
                        <ul className="Menu">
                            <li><a href="/about" className="menu1">About</a></li>
                            <li><a href="/work" className="menu2">Work</a></li>
                            <li><a href="/contact" className="menu3">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}
export default CustomNavbar