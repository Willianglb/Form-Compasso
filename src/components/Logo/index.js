import React from 'react';
import img from '../img/LogoCompassoUOL.png';
import * as S from './Logo.styles';

const Logo = () => {
    return (
        <>
        <S.Cabecalho>
        <S.Logo> 
            <img src={img} width="180px" />
        </S.Logo>
        <S.Barra>
                    //
        </S.Barra>
        </S.Cabecalho>
        </>
    )
};

export default Logo;