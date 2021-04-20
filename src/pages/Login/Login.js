import React, {useContext} from 'react';
import Store, { appContext } from '../../components/Store/Context';
import Logo from '../../components/Logo/index';
import Banner from '../../components/Banner/index';
import Form from '../../components/Form/index';
import * as S from './Home.styles.js';

const PagesLogin = () => {
  const {email, senha} = useContext(appContext);

  
  return (
    <>
      <Logo />
      <S.Home>
      <S.Grid1><Banner /></S.Grid1>
      <S.Grid2><Form aoEnviar={aoEnviarForm}/></S.Grid2>
      <S.Grid3>
        <S.H>Ultimo Usuário Logado:</S.H> <br></br>
        Email: "{email}"<br></br>
        Senha: "{senha}"<br></br>
      </S.Grid3>
      </S.Home>
    </>
  );
  };

  function aoEnviarForm(dados) {
    console.log(dados);
  }

export default PagesLogin;
