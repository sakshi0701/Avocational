import React from 'react';
import Icon1 from "../Images/svg-1.svg";
import Icon2 from "../Images/svg-3.svg";
import Icon3 from "../Images/svg-2.svg";
import { Container, H1, Wrapper, ServicesCard, ServicesIcon, H2, P } from "./servicesStyles";

const Services = () => {
    return (
        <>
            <Container id="services">
                <H1>Our Services</H1>
                <Wrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <H2> Service 1</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing.</P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <H2> Service 2</H2>
                        <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et?</P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <H2> Service 3</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                    </ServicesCard>
                </Wrapper>
            </Container>
        </>
    )
}

export default Services
