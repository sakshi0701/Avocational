import styled from "styled-components";

export const Nav = styled.nav`
    background: linear-gradient(90deg, rgb(4, 4, 206), #00B0FF);
    height: 80px;
    margin-top: -80px; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

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
        margin-left: 24px;
        margin-top: 12px;
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