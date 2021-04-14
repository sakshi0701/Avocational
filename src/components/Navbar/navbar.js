import React from 'react';
import { Nav, NavbarContainer, NavLogo, Snow } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";
import { FaRegSnowflake } from "react-icons/fa";

const Navbar = ({ toggle }) => {

    // scrolls up when we click the logo or name
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav>
                <NavbarContainer >
                    <NavLogo onClick={toggleHome}><a href='/' onClick={toggleHome}><Snow><FaRegSnowflake /></Snow> Avocational <Snow><FaRegSnowflake /></Snow></a></NavLogo>
                </NavbarContainer>
            </Nav>
        </>
    )
}


export default Navbar

