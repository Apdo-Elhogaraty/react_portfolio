import {React, useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AiOutlineGithub } from "react-icons/ai";
import { TfiFacebook , TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Header = () => {
  
  var collapsed = document.getElementById("Navbar");
  console.log(collapsed)
  window.addEventListener("scroll",()=>{
    var header = document.getElementById("Navbar");
    (window.scrollY) ? header.classList.add("bg-body-tertiary") : header.classList.remove("bg-body-tertiary");
  })
  return (
    <Navbar expand="lg" data-bs-theme="dark"
    id='Navbar'
     >
      <Container>
        <Navbar.Brand href="#"><span className='logo'>A.EL-H</span>ogaraty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end'>
          <Nav
            className="my-2 my-lg-0 align-items-center"
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Skils">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>

            <div className='mx-4 social'>
            <a href='https://www.linkedin.com/in/abdelrahman-ahmed-609374228' target='_blank'><TfiLinkedin className='icon' /></a>
            <a href='https://github.com/Apdo-Elhogaraty?tab=repositories' target='_blank'><BsGithub className='icon' /></a>
            <a href='https://www.facebook.com/profile.php?id=100032961902150' target='_blank'><TfiFacebook className='icon' /></a>
            </div>

            <button className="vvd"><a href='#Connect'>Let's Connect</a></button>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header;
