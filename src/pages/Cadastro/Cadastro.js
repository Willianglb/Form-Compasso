import React, {useContext, useState} from 'react';
import DataContext from '../../components/Store/DataContext';
import Logo from '../../components/Logo/index';
import Banner from '../../components/Banner/index';
import Title from '../../components/Title/index';
import Button from '../../components/Button/index';
import FormCadastro from '../../components/FormCadastro/index';
import * as S from './HomeCadastro.styles.js';

const PagesCadastro = () => {
  const variavel = useContext(DataContext);

  return (
    <>
      <Logo />
      <S.Home>
      <S.Grid1><Banner /></S.Grid1>
      <S.Grid2><FormCadastro aoEnviar={aoEnviarForm}/></S.Grid2>
      <S.Grid3>
        nome: {variavel.state.nome} <br></br>
        email: {variavel.state.email}<br></br>
        senha: {variavel.state.senha}<br></br>
      </S.Grid3>
      </S.Home>
    </>
  );
  };

  function aoEnviarForm(dados) {
    console.log(dados);
  }

export default PagesCadastro;