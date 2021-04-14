import React from 'react';
import * as S from "./Title.styles";

export interface InfoTitle {
    id: number;
    title: string;
    alt: string;
};

const Title = () => {
    return (
        <>
        <S.Title
        type="label"
        >Cresça com a Compasso UOL</S.Title>
        </>
    )
};

export default Title;
