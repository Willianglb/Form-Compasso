import styled from "styled-components";

export const Alert = styled.div`
`;

export const Home = styled.div`
display: ${props => props.theme.display.displayGrid};
grid-gap: .2rem;
 grid-template-columns: 100%;
 grid-template-rows: auto auto auto ;
 height: calc(100vh - 50px);
 align-items: center;

 @media(min-width: 600px){
    grid-template-columns: 55% 45%;
    grid-template-rows: auto auto;
    height: calc(100vh - 50px);
}
`;

export const Grid1 = styled.div`
grid-column: 1 / 1;
grid-row: 1 / 2;
}
`;

export const Grid2 = styled.div`
grid-column: 1;
grid-row: 2 / 2;
@media(min-width: 600px){
    grid-column: 2;
    grid-row: 1 / 2;
}
`;

export const Grid3 = styled.div`
grid-column: 1;
grid-row: 3;
margin-left: 80px;
margin-right: 80px;
font-size:${props => props.theme.fontSizes.fontSizeNano};
font-family : ${props => props.theme.fonts.avenir};
text-align: center;
background: ${
    function getColor(props){
        console.log(props.variavel)
    if(props.variavel == 'grey')
    return "#707070"
    if(props.variavel == 'green')
    return "#486b48"
    if(props.variavel == 'blue')
    return "#3a6080"
    if(props.variavel == 'yellow')
    return "#b4b646"
    }
};
padding: 0.5em 1em;
border: 2px solid palevioletred;
border-radius: 8px;


@media(min-width: 600px){
    grid-column: 1;
    grid-row: 2;
    margin-top: -60px;
}`;

export const H = styled.label`
font-weight: ${props => props.theme.fontWeight.bold};
text-decoration: underline;
`;