import React, {useState} from 'react';
import ButtonStyles from './Button.styles';

export interface InfoButton {
    id: number;
    title: string;
    alt: string;
};

const Button = React.forwardRef((props, ref) => {
    const { onChange, children} = props;
    const { id, name = id, type, errors } = props.config;

    return (
        <>
        <ButtonStyles {...props} errors={errors} className='buttonForm'>
            <button 
                id={id}
                type={type}
                name={name}
                ref={ref}
                onChange={onChange}
                {...props.config}
            > Enviar </button>
        {children}
        </ButtonStyles>
        </>
    )
});

export default Button;