import React, { Component } from 'react';
import $ from 'jquery';

export default class Colecoes extends Component {

    constructor() {
        super()
        this.state = {
            colecoes: []
        };
    }

    componentDidMount() {

        var that = this;

        $.get('', function (result) {
            that.setState({ colecoes: [
                {
                    "id": 1,
                    "nome": "Avulsos",
                    "imagem": "3659ab03897f99adb7e9709f983b719e..jpg",
                    "qtde_categorias": 21,
                    "ativo": 1
                }] })
        });
    }

    render() {

        return (
            <div>
                {
                    this.state.colecoes.map(function (colecao) {
                        return (<p key={colecao.id}>{colecao.nome}</p>);
                    })
                }
            </div>
        )


    }
}