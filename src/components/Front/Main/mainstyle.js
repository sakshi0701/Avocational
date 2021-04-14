import styled from "styled-components";


export const Container = styled.div`
    background: linear-gradient(90deg, #1687a7, #00B0FF);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    position: relative;
    z-index: 1;
    background: black;
    margin-top: -80px;
`;

export const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px, 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-style: italic;
`;

export const P = styled.p`
    margin-top: 70px;
    color: white;
    font-size: 30px;
    text-align: center;
    max-width: 600px;
    // font-family: 'Lobster', cursive;
    font-family: 'Sansita', sans-serif;
    font-weight: lighter;

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

