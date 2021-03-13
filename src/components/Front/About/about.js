import React from 'react';
import { Button } from "../ButtonElements";
import { Container, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, SubTitle, ButtonWrap, ImgWrap, Img } from "./aboutStyle";
import Icon from "./about.svg";

const About = ({ lightBg, lightText, id, TopLine, imgStart, heading, description, buttonLabel, darkText, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <Container lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{TopLine}</TopLine>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
                                <ButtonWrap>
                                    <Button to="home"
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}>
                                        {buttonLabel}</Button>
                                </ButtonWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={Icon} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </Container>
        </>
    )
}

export default About;
