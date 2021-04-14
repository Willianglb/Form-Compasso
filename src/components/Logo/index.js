import React from 'react';
import img from '../img/LogoCompassoUOL.png';
import * as S from './Logo.styles';
import { Popover } from 'react-tiny-popover';

const Logo = (props) => {
    return (
        <>
        <Popover
            isOpen={props.isPopoverOpen}
            positions={['top', 'bottom', 'left', 'right']}
            reposition={false}
        >
        <S.Cabecalho>
        <S.Logo> 
            <img src={img} width="180px" alt="Logotipo Compasso UOL"/>
        </S.Logo>
        <S.Barra>
                    //
        </S.Barra>
        </S.Cabecalho>
        </Popover>
        </>
    )
};

export default Logo;