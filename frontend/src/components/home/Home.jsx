import React from 'react';
import Main from '../template/Main';

export default props =>
   <Main
     icon="home" 
     title="Início"
     subtitle="Sistema de Cadastro Básico"
     > 
     {/* corpo do conteudo main */}
     <div className="display-4">Bem vindo!</div>
     <hr />
     <p className="mb-0"> Construção de Cadastro desenvolvido em React !</p>
     </Main>