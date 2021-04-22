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
 
const InputFormStyles = styled.div`
    width: auto;
    position: relative;
    flex: 1;
    > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    ${(props) => props.errors && showErrorIcon(props)};
    margin: 8px 0;
    }
    
    label {
        font-size: ${props => props.theme.fontSizes.fontSizeNano}
        padding: 10px 0 5px 7%;
        text-align: ${props => props.theme.textAlign.textAlignLeft};
        color: white;
        padding-top: 10px;
    }
    
    input {
    font-size: ${props => props.theme.fontSizes.fontSizeMedium}
    color: black;
    width: 480px;
    padding: 0.75em;
    transition: all 0.3s;
    &[type='text'] {
    }
    ${(props) => props.errors && showErrorIcon(props)};
    ${(props) => props.errors && `border: 1px solid `};
    }
`;

export default InputFormStyles;