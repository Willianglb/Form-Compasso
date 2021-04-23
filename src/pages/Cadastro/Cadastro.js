import React, {useContext} from 'react';
import { appContext } from '../../components/Store/Context';
import Logo from '../../components/Logo/index';
import Banner from '../../components/Banner/index';
import Footer from '../../components/Footer/index';
import FormCadastro from '../../components/FormCadastro/index';
import * as S from './HomeCadastro.styles.js';

const PagesCadastro = () => {
  const {nome, email, senha} = useContext(appContext);

  function callAlert() {
    alert('teste')
    console.log('callalert');
  }

  return (
    <>
    <S.Alert>
      <Logo />
        <S.Home onClick={() => callAlert}>
          <S.Grid1><Banner/></S.Grid1>
          <S.Grid2><FormCadastro/></S.Grid2>
          <S.Grid3>
            <S.H>Ultimo Usuário Cadastrado:</S.H> <br></br>
              Nome: "{nome}" <br></br>
              Email: "{email}"<br></br>
              Senha: "{senha}"<br></br>
          </S.Grid3>
        </S.Home>
      <Footer />
    </S.Alert>
    </>
  );
  };

export default PagesCadastro;