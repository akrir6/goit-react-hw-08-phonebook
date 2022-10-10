import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #F2F2F2;
    padding: 8px;
    border: 1px solid #CCEBE8;
    color: #1F4E49;
`


export const Form=styled.form`
    padding: 8px;
    background-color: #F2F2F2;
    
`

export const Label=styled.label`
    display: flex;
    gap: 8px;
    padding: 4px;
    height: 20px;
    justify-content: space-between;
    align-items:center;
    font-size: small;
`

export const Input=styled.input`
    border:1px solid #1F4E4950;
    color: #1F4E49;
    font-size: medium;
    outline: none;

    :hover,
    :focus{
        border-color: #1F4E49;
    }
`

export const Button = styled.button`
    padding: 4px;
    background-color: #1F4E49;
    color: #F2F2F2;
    border:none;
    font-size: small;
    outline: none;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #FF931E;
    }
`