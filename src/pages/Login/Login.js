import React, {useContext} from 'react';
import { appContext } from '../../components/Store/Context';
import Logo from '../../components/Logo/index';
import Banner from '../../components/Banner/index';
import FormLogin from '../../components/Form/index';
import * as S from './Home.styles.js';

const PagesLogin = () => {
  const {email, senha} = useContext(appContext);

  
  return (
    <>
      <Logo />
        <S.Home>
        <S.Grid1><Banner /></S.Grid1>
        <S.Grid2><FormLogin/></S.Grid2>
        <S.Grid3>
          <S.H>Ultimo Usuário Logado:</S.H> <br></br>
          Email: "{email}"<br></br>
          Senha: "{senha}"<br></br>
        </S.Grid3>
        </S.Home>
    </>
  );
  };
  
export default PagesLogin;
