import React from 'react';
import * as S from './Footer.styles';
import img from '../img/LogoCompassoUOL.png';

const Footer = (props) => {
    
    return (
        <>
            <S.Cabecalho>
                <S.Logo> 
                    <img src={img} width="300px" alt="Logotipo Compasso UOL"/>
                </S.Logo>
            </S.Cabecalho>
        </>
    )
};

export default Footer;