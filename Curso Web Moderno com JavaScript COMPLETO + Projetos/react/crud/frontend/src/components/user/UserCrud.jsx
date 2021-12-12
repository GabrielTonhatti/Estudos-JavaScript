import axios from 'axios';
import Main from "../template/Main";
import React, { Component } from "react";

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuário: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users';
const initialState = {
    user: { name: '', email: '' },
    list: []
};

export default class UserCrud extends Component {

    state = { ...initialState };

    clear() {
        this.setState({ user: initialState.user });
    }

    save() {
        const user = this.state.user;
        const method = user.id;

    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        );
    }
}