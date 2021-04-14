import React, {useState, useContext} from 'react';
import * as S from './ListarUsuarios.styles';
import { useForm } from "react-hook-form";


function initialState() {
    return { email: '', senha: ''};
}

const ListarUsuarios = (props) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [bordeEmail, setbordeEMail] = useState();
    const [bordeSenha, setbordeSenha] = useState();
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
                props.aoEnviar({ email, senha })
                setSenha("");
                setEmail("");
            }}>

            <S.InputTitulo>Login</S.InputTitulo>

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

export default ListarUsuarios;