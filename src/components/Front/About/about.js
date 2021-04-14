import React from 'react';
import { Container, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Heading, SubTitle, ImgWrap, Img } from "./aboutStyle";
import Icon from "./about.svg";

const About = ({ lightBg, lightText, id, imgStart, heading, description, darkText, img, alt, primary, dark, dark2 }) => {
    return (
        <>
            <Container lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{heading}</Heading>
                                <SubTitle darkText={darkText}>{description}</SubTitle>
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
