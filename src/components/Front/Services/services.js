import React from 'react';
import Icon1 from "./Images/code.svg";
import Icon2 from "./Images/read.svg";
import Icon3 from "./Images/cook.svg";
import { Container, H1, Wrapper, ServicesCard, ServicesIcon, H2, P } from "./servicesStyles";

const Services = () => {
    return (
        <>
            <Container id="services">
                <H1>What to find?</H1>
                <Wrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <H2>Technology</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing.</P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <H2>Build</H2>
                        <P>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et?</P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <H2>Skill</H2>
                        <P>Lorem ipsum dolor sit amet consectetur adipisicing elit.</P>
                    </ServicesCard>
                </Wrapper>
            </Container>
        </>
    )
}

export default Services
