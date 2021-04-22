import React, { useContext } from 'react';
import { appContext } from '../../components/Store/Context';
import * as S from './FormCadastro.styles';
import InputForm from '../InputForm/index';
import Button from '../Button/index';
import LabelTitulo from '../LabelTitulo/index';
import FormBase from '../FormBase/index';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { button, number, select } from '@storybook/addon-knobs';

const FormCadastro = () => {
    const {nome, email, senha, setNome, setEmail, setSenha} = useContext(appContext);

    const schema = yup.object().shape({
        nome: yup.string().required("O campo nome é obrigatório."),
        email: yup.string().email().required("O campo email é obrigatório."),
        senha: yup.string().required("O campo senha é obrigatório.")
    });

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    return (
            <S.Form onSubmit={handleSubmit((d) => console.log(d))}>
                <LabelTitulo 
                config={{
                    label: 'Cadastro'
                }}
                />
                <InputForm
                    name="nome"
                    ref={register}
                    value={nome}
                    config={{
                        label: 'Nome',
                        type: 'name',
                        placeholder: 'Nome',
                        errors: errors.nome,
                    }}
                    onChange={(event) => {
                        setNome(event.target.value);
                    }}
                    required
                    />
                    {errors.nome && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.nome?.types?.message}</label>
                    </div>
                )}

                <InputForm
                    name="email"
                    ref={register}
                    value={email}
                    config={{
                        label: 'Email',
                        type: 'email',
                        placeholder: 'Email',
                        errors: errors.email,
                    }}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    />
                    {errors.email && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.email?.types?.message}</label>
                    </div>
                )}

                <InputForm
                    name="senha"
                    ref={register}
                    value={senha}
                    config={{
                        label: 'Senha',
                        type: 'password',
                        placeholder: 'Senha',
                        errors: errors.senha,
                    }}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    />
                    {errors.senha && (
                    <div className='errorBox'>
                    <label className='errorLabel'>{errors.senha?.types?.message}</label>
                    </div>
                )}
                
                <Button
                variant="contained"
                config={{
                    label: 'Enviado'
                }} 
                />
            </S.Form>
    );
};

export default FormCadastro;