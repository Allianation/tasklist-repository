import styled from 'styled-components';

export const FormContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

export const FormTitle = styled.h1`
    color: #333;
    font-size: 2em;
`;

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-bottom: 20px;
`;

export const FormInput = styled.input`
    flex-grow: 1;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

export const FormButton = styled.button`
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
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:hover {
        color: #fff;
        background-color: #164863;
        border-color: #164863;
    }
`;