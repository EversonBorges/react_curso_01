import React, { Component } from 'react';
import "./estilo.css";

class ListaCategorias extends Component {

    constructor(){
        super();
        this.state = {categorias:[]};
        this._novasCategoras = this._novasCategoras.bind(this);
    }

    componentDidMount(){
        this.props.categorias.inscrever(this._novasCategoras);
    }

    componentWillUnmount(){
        this.props.categorias.desinscrever(this._novasCategoras);
      }

    _novasCategoras(categorias){
        this.setState({...this.state, categorias})
    }

    _handleEvenInput(e){
        if(e.key === 'Enter'){
            this.props.criarCategoria(e.target.value);
            
        }
    }
    render() { 
        return (
            <section className="lista-categorias">
                <input
                    type="text"
                    placeholder="Adicionar categorias"
                    onKeyUp={this._handleEvenInput.bind(this)}
                />
                
                <ul className="lista-categorias_lista">
                    {this.state.categorias.map((categoria, index) => {
                        return (
                            <li className="lista-categorias_item" key={index}>{categoria}</li>
                        )
                    })}
                </ul>
               
            </section>
            );
    }
}
 
export default ListaCategorias;