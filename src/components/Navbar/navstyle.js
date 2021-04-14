import styled from "styled-components";

export const Nav = styled.nav`
    background: linear-gradient(90deg, #1687a7, #00B0FF);
    height: 80px;
    margin-top: 0px; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;

    @media screen and (max-width: 960px) {
        transition: 0.5s all ease; 
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled.div`
    a{
        color: white;
        justify-self: flex-start;
        display: flex;
        align-items: center;
        margin-left: 10px;
        margin-top: 3px;
        font-size: 35px;
        font-family: 'Lobster', cursive;
        letter-spacing: 2px;
        text-decoration: none;
        cursor: pointer;

        &:hover {
            color: white;
            text-decoration: none;
        }
    }
    
`;

export const Snow = styled.div`
    animation: rot 2s linear infinite;
    margin : 10px;

    @keyframes rot{
        0%{
            transform : rotate(0deg);
        }
        0%{
            transform : rotate(360deg);
        }
    }
`;
