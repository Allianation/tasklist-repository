import styled from 'styled-components';

export const DivItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const DivName = styled.div`
    flex-grow: 1;
    margin-right: 10px;
`;

export const DivNameCompleted = styled.div`
    flex-grow: 1;
    margin-right: 10px;
    text-decoration:line-through;
`;

export const ButtonComplete = styled.button`
    color: #fff;
    background-color: #427D9D;
    border-color: #427D9D;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    margin-right: 10px;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #164863;
        border-color: #164863;
    }
`;

export const ButtonDelete = styled.button`
    color: #fff;
    background-color: #BE3144;
    border-color: #BE3144;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #872341;
        border-color: #872341;
    }
`;