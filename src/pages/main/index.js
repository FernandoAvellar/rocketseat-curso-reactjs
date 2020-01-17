import React, { Component } from 'react';
import api from "../../services/api"
import "./styles.css"

export default class Main extends Component {
    //Todas variaveis criadas aqui dentro são monitoradas pelo componente
    //javendo uma alteração o método render() irá ser executado automaticamente
    state = {
        products: [],
    }

    //Método sempre invocado na inicialização do componente
    componentDidMount() {
        this.loadProducts();
    }

    //Método criado pelo programador deve ser sempre com arrow functions
    //caso não seja feito não teremos o acesso às variaveis 'this' lá dentro.
    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState({ products: response.data.docs })
    }

    render() {
        const { products } = this.state;
        return (
            <div className="product-list">
                { products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="www.uol.com.br">Acessar</a>
                    </article>
                ))}
            </div>
        )
    }
}