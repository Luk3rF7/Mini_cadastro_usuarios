/* import  */
import React from 'react'; 
import { BrowserRouter } from 'react-router-dom';
/* BrowserRouter serve tanto para navegação e fazer Dom */
// ========= imports locais =========
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';
import Routes from './Routes';

/* area responsavel por renderizar  */

export default props =>
<BrowserRouter >
<div className="app" >
    {/* area responsavel da page */}
    <Logo />
    <Nav />
    <Routes />
    <Footer />
</div>
</BrowserRouter>


