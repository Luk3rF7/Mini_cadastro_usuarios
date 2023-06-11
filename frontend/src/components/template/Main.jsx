import './Main.css'
import React from 'react'
import Header from './Header.jsx'

export default props => 
<React.Fragment>
    <Header 
    {...props} // cria obj recendo props do app.js
     />
    <main className="content container-fluid">
    <div className="p-3 mt-3">
    {props.children}  {/*  <- renderiza as props do app.jsx */}
    </div>
    </main>
</React.Fragment>