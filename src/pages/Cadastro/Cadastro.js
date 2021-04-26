import React, {useContext, useState} from 'react';
import { appContext } from '../../components/Store/Context';
import Logo from '../../components/Logo/index';
import Banner from '../../components/Banner/index';
import Footer from '../../components/Footer/index';
import FormCadastro from '../../components/FormCadastro/index';
import * as S from './HomeCadastro.styles.js';
import { blue, green } from '@material-ui/core/colors';
import { List } from 'semantic-ui-react';

const PagesCadastro = () => {
  const {nome, email, senha} = useContext(appContext);
  const [selectValue, setSelectValue] = useState('');  
  const list = [
    {id: 'grey', name: 'Cinza'},
    {id: 'green', name: 'Verde'},
    {id: 'blue', name: 'Azul'},
    {id: 'yellow', name: 'Amarelo'},
  ];

  function callAlert() {
    alert('teste')
    console.log('callalert');
  }

  return (
    <>
      <S.Alert>
        <Logo />
        <S.Home onClick={() => callAlert}>
        <S.Grid1>
          <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
            {list.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}        
          </select>
          <Banner/>
        </S.Grid1>
        <S.Grid2>
          <FormCadastro variavel={selectValue}/>
        </S.Grid2>
          <S.Grid3>
            <S.H> Testando o Context:</S.H> <br></br>
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