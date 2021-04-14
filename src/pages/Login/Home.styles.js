import styled from "styled-components";

export const Home = styled.div`
display: ${props => props.theme.display.displayGrid};
grid-gap: .2rem;
 grid-template-columns: 100%;
 grid-template-rows: auto auto auto ;
 height: calc(100vh - 50px);
 align-items: center;

 @media(min-width: 600px){
    grid-template-columns: 50% 50%;
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
}`;

export const Grid3 = styled.div`
grid-column: 2;
grid-row: 2 / 2;
}`;