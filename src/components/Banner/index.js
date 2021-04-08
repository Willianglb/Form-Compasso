import React from "react";
import * as S from './Banner.styles.js';
import img from '../img/UolBanner.jpg';

const Banner = () => {
        return (
            <>
            <S.Banner>
                <img src={img} width="100%"/>
            </S.Banner>
            </>
        )
    };

export default Banner;