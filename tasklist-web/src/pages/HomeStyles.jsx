import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    padding: 16px;
    background: #164863;
`;

export const HeaderTitle = styled.h3`
    font-family: 'Arial', sans-serif;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const NavList = styled.ul`
    list-style-type: none;
`;

export const NavButton = styled.button`
    display: inline-block;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover {
        color: #212529;
    }
`;