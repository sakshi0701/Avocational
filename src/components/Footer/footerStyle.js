import styled from "styled-components";

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
margin-bottom: 20px;
background-color: rgb(189, 192, 196);
color: white;
`;

export const H1 = styled.h1`
    font-family: sans-serif;
    letter-spacing: 2px;
    color: rgb(60, 60, 60);
    text-align: center;
    margin-top: 10px;
    margin-right: 20px;
    font-size: 20px;

@media screen and (max-width: 480px) {
    font-size: 20px;
    padding: 0 5px;
}
`;

export const WhatsApp = styled.div`
margin: 0 1rem;
color: black;
display: flex;
font-size: 25px;
background-color: rgb(189, 192, 196);
    height: 30px;
    width: 30px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
    -6px -6px 10px -1px rgba(255,255,255,0.3);
    border: 1px solid rgba(0,0,0,0.01);

&:hover {
    margin: 0 1rem;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 10px -1px rgba(255,255,255,0.7);
    transition: transform 0.5s;
    transform: translateY(1px);
    color: green;
    cursor: pointer;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;

export const FB = styled.div`
margin: 0 1rem;
color: black;
display: flex;
font-size: 25px;
background-color: rgb(189, 192, 196);
    height: 30px;
    width: 30px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
    -6px -6px 10px -1px rgba(255,255,255,0.3);
    border: 1px solid rgba(0,0,0,0.01);

&:hover {
    margin: 0 1rem;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 10px -1px rgba(255,255,255,0.7);
    transition: transform 0.5s;
    transform: translateY(1px);
    color: blue;
    cursor: pointer;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;

export const Instagram = styled.div`
margin: 0 1rem;
color: black;
display: flex;
font-size: 25px;
background-color: rgb(189, 192, 196);
    height: 30px;
    width: 30px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
    -6px -6px 10px -1px rgba(255,255,255,0.3);
    border: 1px solid rgba(0,0,0,0.01);

&:hover {
    margin: 0 1rem;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 10px -1px rgba(255,255,255,0.7);
    transition: transform 0.5s;
    transform: translateY(1px);
    color: rgb(204, 0, 153);
    cursor: pointer;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;

export const Twitter = styled.div`
margin: 0 1rem;
color: black;
display: flex;
font-size: 25px;
background-color: rgb(189, 192, 196);
    height: 30px;
    width: 30px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    margin: 0px 15px;
    text-decoration: none;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
    -6px -6px 10px -1px rgba(255,255,255,0.3);
    border: 1px solid rgba(0,0,0,0.01);

&:hover {
    margin: 0 1rem;
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
    inset -4px -4px 10px -1px rgba(255,255,255,0.7);
    transition: transform 0.5s;
    transform: translateY(1px);
    color: rgb(0, 81, 255);
    cursor: pointer;
}

@media screen and (max-width: 480px) {
    font-size: 20px;
}
`;
