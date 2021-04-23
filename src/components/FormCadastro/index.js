import React, { useContext } from 'react';
import { appContext } from '../../components/Store/Context';
import InputForm from '../InputForm/index';
import Button from '../Button/index';
import LabelTitulo from '../LabelTitulo/index';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { button, number, select } from '@storybook/addon-knobs';
import './styleForm.css';

const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatório."),
    email: yup.string().email().required("O campo email é obrigatório."),
    senha: yup.string().required("O campo senha é obrigatório.")
});

const FormCadastro = () => {
    const {nome, email, senha, setNome, setEmail, setSenha} = useContext(appContext);

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    return (
            <form 
            onSubmit={handleSubmit((d) => console.log(d))}
            >

                <LabelTitulo
                    config={{
                        label: 'Cadastro'
                    }}
                />

                <InputForm
                    config={{
                        label: 'Nome',
                        type: 'name',
                        placeholder: 'Nome',
                        name: 'nome',
                        ref: register,
                        onChange: (event) => {
                            setNome(event.target.value);
                        },
                        value: nome,
                        errors: errors.nome,
                    }}
                    />
                    {errors.nome && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.nome?.types?.message}</label>
                    </div>
                )}

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
                    <label className='errorLabel'>{errors.email?.types?.message}</label>
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
                    <label className='errorLabel'>{errors.senha?.types?.message}</label>
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
    );
};

export default FormCadastro;