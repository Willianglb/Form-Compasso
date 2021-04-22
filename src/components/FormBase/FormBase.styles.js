import styled from "styled-components";

export const Form = styled.form`
    display: ${props => props.theme.display.displayGrid};
    font-size:${props => props.theme.fontSizes.fontSizeTwoFive};
    font-family : ${props => props.theme.fonts.avenir};
    letter-spacing: ${props => props.theme.letterSpacing.letterSpacingZero};
    font-weight: ${props => props.theme.fontWeight.bold};
    background: ${props => props.theme.colors.cinza};
    color: ${props => props.theme.colors.palevioletred};
    heigth: "auto";
    width: "auto";
    padding: 0.5em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;

    @media(min-width: 600px){
        margin-top: 0px;
    }
`;