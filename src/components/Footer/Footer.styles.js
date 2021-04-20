import styled from "styled-components";

export const Cabecalho = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    top: 350px;
    width: auto;

    @media(min-width: 600px){
        width: auto;
        top: 0px;
};
`;

export const Logo = styled.image`
    position: relative;
    top: 20px;
    left: 40px;

    @media(min-width: 600px){
        padding-left: 70%;
        top: -10px;
        left: 0px;
};
`;

export const Barra = styled.div`
    padding-left: 150%;
    padding-top: 3%;

`;