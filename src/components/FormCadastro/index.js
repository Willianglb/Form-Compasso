import React, {useState, useContext} from 'react';
import Context, { appContext } from '../../components/Store/Context';
import * as S from './FormCadastro.styles';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { button, number, select } from '@storybook/addon-knobs';

const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatório."),
    email: yup.string().email().required("O campo email é obrigatório."),
    senha: yup.string().required("O campo senha é obrigatório.")
});

const FormCadastro = (props) => {
    const {nome, email, senha} = useContext(appContext);

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => console.log(data);

    return (
        <>
        <S.Box>
            <S.Form onSubmit={handleSubmit(onSubmit)}>
                <S.InputTitulo>Cadastro</S.InputTitulo>
                <S.Label>Nome completo</S.Label>
                <S.Input
                    {...register("nome")}
                    value={nome}
                    type="text"
                    required
                    placeholder="Seu Nome"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.nome?.message}

                <S.Label>Email</S.Label>
                <S.Input
                    {...register("email")}
                    value={email}
                    type="email"
                    required
                    placeholder="Seu Email"
                    id="email"
                    label="email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                />
                {errors.email?.message}

                <S.Label>Senha</S.Label>
                <S.Input
                    {...register("senha")}
                    value={senha}
                    type="password"
                    id="password"
                    required
                    placeholder="Sua senha"
                    label="password"
                    variant="password"
                    margin="password"
                    fullWidth
                />
                {errors.senha?.message}
                
                <S.InputButton type="submit" variant="contained" />
            </S.Form>
        </S.Box>
        </>
    );
};

export default FormCadastro;