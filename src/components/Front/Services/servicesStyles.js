import styled from "styled-components";

export const Container = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #00B0FF;

    @media screen and (max-width: 768px) {
        height: 1100px;

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const H1 = styled.h1`
    font-size: 3rem;
    color: white;
    margin-bottom: 64px;
    font-family: 'Lobster', cursive;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const Wrapper = styled.div`
    max-width: 1000px;
    margin : 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
`;

export const P = styled.p`
    font-size: 0.8rem;
    text-align: center;
    font-style: italic;
`;
