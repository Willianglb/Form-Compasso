import React, {useState, useContext} from 'react';
import DataContext from '../Store/DataContext'
import * as S from '../Form/Form.styles';
import { useForm } from "react-hook-form";
import { button } from '@storybook/addon-knobs';

function initialState() {
    return { nome: '', email: '', senha: ''};
}

const FormCadastro = (props) => {
    const variavel = useContext(DataContext);
    const [nome, setNome] = useState(initialState);
    const [email, setEmail] = useState(initialState);
    const [senha, setSenha] = useState(initialState);
    const [bordeEmail, setbordeEMail] = useState();
    const [bordeSenha, setbordeSenha] = useState();
    const [bordeNome, setbordeNome] = useState();
    const { formState: { errors } } = useForm();
    
    function Troca() {
        variavel.setState({
        ...variavel.state,
        nome: variavel.state.nome,
        email: variavel.state.email,
        senha: variavel.state.senha
        })
    }

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
                props.aoEnviar({ nome , email, senha })
                setSenha("");
                setEmail("");
                setNome("");
            }}>

                <S.InputTitulo>Cadastro</S.InputTitulo>
                <S.Label>Nome completo</S.Label>
                <S.Input isActive={bordeNome}
                value={nome}
                type="text"
                required
                placeholder="Seu Nome"
                onChange={(event) => {
                    setNome(variavel.state.nome);
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
                    setEmail(variavel.state.email);
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
                    setSenha(variavel.state.senha);

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