import React from 'react';
import Icon1 from "./Images/code.svg";
import Icon2 from "./Images/fashion.svg";
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
                        <P>Learning HTML and CSS is a lot more challenging than it used to be. Thereby we present you our platform to pave your way to professionalism. </P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <H2>Design </H2>
                        <P>Fashion is a popular aesthetic expression. Discover your style of dressing here.</P>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <H2>Taste</H2>
                        <P>No one who cooks, cooks alone. Figure out our new  and try out new tastes.</P>
                    </ServicesCard>
                </Wrapper>
            </Container>
        </>
    )
}

export default Services
