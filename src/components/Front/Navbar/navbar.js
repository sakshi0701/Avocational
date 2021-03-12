import React from 'react';
import { FaBars } from "react-icons/fa";
import {Nav,NavbarContainer,NavLogo, MobileIcon,NavMenu,NavItem,NavLinks } from "./navstyle.js";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({toggle}) => {

    // scrolls up when we click the logo or name
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const signin = () => {
        scroll.scrollToBottom();
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>Name of the Site</NavLogo>
                        <MobileIcon onClick = {toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='services'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Services</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks
                                onClick={signin} 
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact='true'
                                offset={-80}
                                >Log In</NavLinks>
                            </NavItem>
                        </NavMenu>                   
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar

