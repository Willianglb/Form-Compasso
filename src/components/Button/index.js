import React, {useState} from 'react';
import ButtonStyles from './Button.styles';

export interface InfoButton {
    id: number;
    title: string;
    alt: string;
};

const Button = React.forwardRef((props, ref) => {
    const [ checked, setChecked ] = useState(false)
    const { onChange, children } = props;
    const { id, name = id, label, type, errors } = props.config;

    return (
        <>
        <ButtonStyles {...props} errors={errors} className='inputForm'>
        <input 
                id={id}
                type={type}
                name={name}
                ref={ref}
                onChange={onChange}
                {...props.config}
            onClick={() => setChecked(!checked)} 
        > Enviar </input>
        { checked ? <label htmlFor={id}>{label}</label> : null }
        {children}
        </ButtonStyles>
        </>
    )
});

export default Button;