import React, { Component } from 'react';
import "./estilo.css";

class ListaCategorias extends Component {

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
                    {this.props.categorias.map((categoria, index) => {
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