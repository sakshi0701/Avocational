import styled from "styled-components";
import image from "./heart.jpg";

export const Container = styled.div`
background: linear-gradient(90deg, #1687a7, #00B0FF);
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 500px;
position: relative;
z-index: 1;
background: black;


`;

export const Background = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
background-image : url(${image});
background-size: 100%;
opacity:0.5;
`;

export const Content = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px, 24px;
display: flex;
flex-direction: column;
align-items: center;

`;



export const P = styled.p`
margin-top: 100px;
color: white;
font-size: 30px;
text-align: center;
max-width: 600px;

@media screen and (max-width: 768px) {
    font-size: 30px;
    margin-top: 40px;
    background-size:100%;
}

@media screen and (max-width: 480px) {
    font-size: 30px;
    margin-top: 40px;
    background-size:100%;
}
`;

