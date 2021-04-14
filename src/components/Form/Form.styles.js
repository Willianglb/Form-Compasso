import styled from "styled-components";

export const Box = styled.div`
heigth: "auto";
width: "auto";
`;

export const ButtonTr = styled.button`
width: 60px;
background: white;
color: palevioletred;
font-size: 0.5em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
`;

export const Form = styled.form`
    display: ${props => props.theme.display.displayGrid};
    font-size:${props => props.theme.fontSizes.fontSizeTwoFive};
    font-family : ${props => props.theme.fonts.avenir};
    letter-spacing: ${props => props.theme.letterSpacing.letterSpacingZero};
    font-weight: ${props => props.theme.fontWeight.bold};
    background: ${props => props.theme.colors.veryGarkGray};
    color: ${props => props.theme.colors.palevioletred};
    padding: 0.5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

`;

export const Input = styled.input`
    font-size: ${props => props.theme.fontSizes.fontSizeMedium}
    color: black;
    width: ${props => props.theme.width.auto};
    padding: 0.75em;
`;

export const InputButton = styled.input`
    margin: 25px 0 10px 10px;
    padding: 1em;
    background-color: palevioletred;
    color: black;
    width: ${props => props.theme.width.auto};
`;

export const Label = styled.label`
font-size: ${props => props.theme.fontSizes.fontSizeNano}
    padding: 10px 0 5px 7%;
    text-align: ${props => props.theme.textAlign.textAlignLeft};
    color: white;
    padding-top: 10px;
`;

export const InputTitulo = styled.label`
    font-size: 2.25em;
    padding: 10px 0 5px 0;
    text-align: center;
    color: palevioletred;
    padding-top: 10px;
    text-decoration: underline;
`;
