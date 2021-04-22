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
 
const LabelTituloStyles = styled.div`
    width: auto;
    position: relative;
    text-align: center;
    ${(props) => props.errors && showErrorIcon(props)};
    }
    
    label {
        font-size: 2.25em;
        padding: 10px 0 5px 0;
        text-align: center;
        color: palevioletred;
        text-decoration: underline;
    }
`;

export default LabelTituloStyles;