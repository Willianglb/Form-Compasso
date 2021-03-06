import React, {useState, useContext} from 'react';
import Context, { appContext } from '../../components/Store/Context';
import InputForm from '../InputForm/index';
import LabelTitulo from '../LabelTitulo/index';
import Button from '../Button/index';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { button } from '@storybook/addon-knobs';
import './styleForm.css';

const schema = yup.object().shape({
    email: yup.string().email().required("O campo email é obrigatório."),
    senha: yup.string().min(2).required("O campo senha é obrigatório.")
});

const FormLogin = () => {
    const {email, senha, setEmail, setSenha} = useContext(appContext);
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });
    return (
        <>
            <form onSubmit={handleSubmit((d) => console.log(d))} >

            <LabelTitulo 
                config={{
                    label: 'Login'
                }}
                />

            <InputForm
                    config={{
                        label: 'Email',
                        type: 'email',
                        placeholder: 'Email',
                        name: 'email',
                        ref: register,
                        onChange: (event) => {
                            setEmail(event.target.value);
                        },
                        value: email,
                        errors: errors.email,
                    }}
                    />
                    {errors.email && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.email.message}</label>
                    </div>
                )}

                <InputForm
                    config={{
                        label: 'Senha',
                        type: 'password',
                        placeholder: 'Senha',
                        name: 'senha',
                        ref: register,
                        onChange: (event) => {
                            setSenha(event.target.value);
                        },
                        value: senha,
                        errors: errors.senha,
                    }}
                    />
                    {errors.senha && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.senha.message}</label>
                    </div>
                )}
                
                <Button
                config={{
                    label: 'Enviado',
                    type: "submit",
                    erros: errors.button,
                }} 
                />
            </form>
        </>
    );
};

export default FormLogin;