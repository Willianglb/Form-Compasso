import React, {useState, useContext} from 'react';
import Context, { appContext } from '../../components/Store/Context';
import * as S from './FormCadastro.styles';
import { useForm } from "react-hook-form";
import { button, number, select } from '@storybook/addon-knobs';

const FormCadastro = (props) => {
    const {nome, email, senha, setNome, setEmail, setSenha} = useContext(appContext);
    const {tema} = useState();
    const [bordeEmail, setbordeEMail] = useState();
    const [bordeSenha, setbordeSenha] = useState();
    const [bordeNome, setbordeNome] = useState();
    const { formState: { errors } } = useForm();

    function validar() {
        if (email.length > 0) {
            setbordeEMail(false);
        }
        else {
            setbordeEMail(true);

        }

        if (senha.length > 5) {
            setbordeSenha(false);
        } 
        else {
            setbordeSenha(true);
        }

        if (nome.length > 0) {
            setbordeNome(false);

        } 
        else {
            setbordeNome(true);
        }

    }


    function validateEmail(email) {
        var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        if (reg.test(email)) {
    }
}

    return (
        <>
        <S.Box>
            <S.Form onSubmit={(event) => {
                event.preventDefault();
                props.aoEnviar({ nome, email, senha })
                setSenha("");
                setEmail("");
                setNome("");
                
            }}>
                <S.Select onChange={(event) => {
                    event.preventDefault();
                    props.enviarTema({tema})
                }}>
                <select name="select" onChange >
                    <option value="cinza">Cinza</option>
                    <option value="preto">Preto</option>
                    <option value="azul">Azul</option>
                </select>
                </S.Select>

                <S.InputTitulo>Cadastro</S.InputTitulo>
                <S.Label>Nome completo</S.Label>
                <S.Input isActive={bordeNome}
                value={nome}
                type="text"
                required
                placeholder="Seu Nome"
                onChange={(event) => {
                    setNome(event.target.value);
                }}
                onBlur={() => {
                    validar();
                }}
                id="nome"
                label="nome"
                variant="outlined"
                margin="normal"
                fullWidth
                />
                {errors.nome && <p>Insira seu primeiro nome.</p>}

                <S.Label>Email</S.Label>
                <S.Input isActive={bordeEmail}
                value={email}
                type="email"
                required
                placeholder="Seu Email"
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                onBlur={() => {
                    validar();
                    validateEmail(email);
                }}
                id="email"
                label="email"
                variant="outlined"
                margin="normal"
                fullWidth
                />
                {errors.email && <p>Insira seu sobrenome</p>}

                <S.Label>Senha</S.Label>
                <S.Input isActive={bordeSenha}
                value={senha}
                type="password"
                onChange={(event) => {
                    setSenha(event.target.value);

                }}
                onBlur={() => {
                    validar();
                }}
                id="password"
                required
                placeholder="Sua senha"
                label="password"
                variant="password"
                margin="password"
                fullWidth
                />
                {errors.senha && <p>Insira sua senha, por favor.</p>}
                
                <S.InputButton type="submit" variant="contained" />
            </S.Form>
        </S.Box>
        </>
    );
};

export default FormCadastro;