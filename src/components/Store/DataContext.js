import React from 'react';

export const data = {
    nome:'will',
    email:'Willian@hotmail.com',
    senha: '121314'
}

const DataContext = React.createContext(data);

export default DataContext;