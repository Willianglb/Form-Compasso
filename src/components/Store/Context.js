import react, { useState, useContext} from 'react';
import DataContext from './DataContext.js';

const Context = (props) => {
  const context = useContext(DataContext)

  function AtualizaDados() {
    context.setState({
        ...context.state,
        nome: context.state.nome,
        email: context.state.email,
        senha: context.state.senha
    })
  }

  const {nome, setNome} = useContext(DataContext);
}

export default Context;