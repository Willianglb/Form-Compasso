import styled, {css} from "styled-components";

const showErrorIcon = (props) => css`
 &::after {
 content: '\f00d';
 font-family: 'Font Awesome 5 Free';
 font-style: normal;
 font-weight: 900;
 font-display: block;
 position: relative;
 right: 25px;
 width: 0%;
 color: green;
 }
`;
 
const ButtonStyles = styled.div`
    display: ${props => props.theme.display.displayGrid};
    position: relative;
    align-items: center;
    ${(props) => props.errors && showErrorIcon(props)};
    
    button {
        margin: 25px 0 10px 10px;
        padding: 1em;
        background-color: palevioletred;
        color: black;
        width: ${props => props.theme.width.auto};
    }
`;

export default ButtonStyles;