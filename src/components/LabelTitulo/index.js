import React from 'react';
import * as S from 'semantic-ui-react';
import LabelTituloStyles from './LabelTitulo.styles';
 
const LabelTitulo = React.forwardRef((props, ref) => {
    const { children } = props;
    const { id, name = id, label, labelNa = '', type, errors } = props.config;


    return (
        <LabelTituloStyles {...props} errors={errors} className='inputForm'>
            <label htmlFor={id}>
                {label}
                <em>{labelNa}</em>
            </label>
        {children}
        </LabelTituloStyles>
    );
});
 
export default LabelTitulo;