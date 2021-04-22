import React from 'react';
import InputFormStyles from './InputForm.styles';
 
const InputForm = React.forwardRef((props, ref) => {
    const { onChange, onBlur, children, icon, value } = props;
    const { id, name = id, label, labelNa = '', type, qa, placeholder, maxLength = null, minLength = null, defaultValue, errors } = props.config;


    return (
        <InputFormStyles {...props} errors={errors} className='inputForm'>
            <label htmlFor={id}>
                {label}
                <em>{labelNa}</em>
            </label>
            <div>
                {icon && <div className='inputFormIconContainer'>{icon}</div>}
                <input
                    id={id}
                    data-qa={qa}
                    maxLength={maxLength}
                    minLength={minLength}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    ref={ref}
                    onChange={onChange}
                    defaultValue={defaultValue}
                    value={value}
                    onBlur={onBlur}
                    {...props.config}
                />
            </div>
        {children}
        </InputFormStyles>
    );
});
 
export default InputForm;