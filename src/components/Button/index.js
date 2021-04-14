import React, {useState} from 'react';
import * as S from './Button.styles';

export interface InfoButton {
    id: number;
    title: string;
    alt: string;
};

const Button = () => {
    const [ checked, setChecked ] = useState(false)

    return (
        <>
        <S.Box>
        <S.Button 
        type="button1"
        onClick={() => setChecked(!checked)
        } >Clique</S.Button>
        { checked ? <S.Label>ON</S.Label> : null }
        </S.Box>
        </>
    )
};

export default Button;