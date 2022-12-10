import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import Image from "../assets/img/Image.png";
import Profile from "../assets/img/photo.jpg";
import colorSharp from "../assets/img/color-sharp.png";
import TrackVisibility from 'react-on-screen';


export const About = () => {

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>About me</h2>
                            <p>My name is Shivam Anand and I am a full-stack Web Application Developer and Software Developer, currently living in Uttar Pradesh. I am pursuring Bachelor of Engineering in Computer Science and Engineering from Chandigarh University, and my primary focus and inspiration for my studies is Web Development. In my free time, I study Android App Development and Graphic Designing. I am both driven and self-motivated, and I am constantly experimenting with new technologies and techniques. I am passionate about Web Developement, and strive to better myself as a developer. </p>
                            <img src={Profile} style={{ maxWidth: '30%' }} alt="Profile" />
                            <h1>Shivam Anand</h1>
                            <p>Web Developer</p>
                            <p><strong>Nickname:- Jadugarh Engineer</strong></p>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}