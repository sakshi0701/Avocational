import React from 'react';
import {Nav,NavbarContainer,NavLogo } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

    // scrolls up when we click the logo or name
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo onClick={toggleHome}><a href='/' onClick={toggleHome}>Name of Site</a></NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

