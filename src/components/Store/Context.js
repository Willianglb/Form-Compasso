import React,{ useState, useContext} from 'react';

const initialState={
  nome: '',
  email: '',
  senha: '',
 }
  
 export const appContext= React.createContext(initialState)
  
 const Context = (props)=>{
  
 const [state, setState] = useState(initialState)
  
 function updateState(key,value){
  setState({
  ...state,
  [key]:value
  })
 }
  
  return(
  <appContext.Provider value={{
  nome: state.nome,
  email: state.email,
  senha: state.senha,
  setNome:(n)=>{updateState('nome',n)},
  setEmail:(e)=>{updateState('email',e)},
  setSenha:(s)=>{updateState('senha',s)},
  }}
  >
  {props.children}
  </appContext.Provider>
  )
 }

export default Context;