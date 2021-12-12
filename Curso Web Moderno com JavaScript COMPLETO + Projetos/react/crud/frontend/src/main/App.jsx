import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import React from 'react';

import Nav from '../components/template/Nav';
import Logo from '../components/template/Logo';
import Main from '../components/template/Main';
import Footer from '../components/template/Footer';

const App = props => 
    <div className="app">
        <Logo />
        <Nav />
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capítulo de React."/>
        <Footer />
    </div>;

export default App;