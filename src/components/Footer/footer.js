import React from 'react';
import { Container, H1, WhatsApp, FB, Instagram, Twitter } from "./footerStyle";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <>
        <Container>
           <H1>Contact us: </H1>
            <WhatsApp>
                <FaWhatsapp />
            </WhatsApp>
            <FB>
                <FaFacebook />
            </FB>
            <Instagram>
                <FaInstagram />
            </Instagram>
            <Twitter>
                <FaTwitter />
            </Twitter> 
        </Container>
            
        </>
    );
};

export default Footer;