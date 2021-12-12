import './Nav.css';
import React from "react";
import Pages from './Pages';

const Nav = props =>
    <aside className="menu-area">
        <nav className="menu">
            <Pages link="/" icon="home" page="Início" />
            <Pages link="/users" icon="users" page="Usuários" />
        </nav>
    </aside>;

export default Nav;