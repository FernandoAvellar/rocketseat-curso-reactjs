import React, { Component } from 'react';
import api from "../../services/api"

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
        console.log(response.data.docs);
        this.setState({ products: response.data.docs })
    }

    render() {
        return (
            <div className="product-list">
                {this.state.products.map(product => (
                    <h2 key={product._id}> {product.title} </h2>
                ))}
            </div>
        )
    }
}