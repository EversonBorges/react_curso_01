import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
  
    this.state = {
      notas:[],
      categorias:[]
    };
  }

  criarNota(titulo, texto){
    const nota = {titulo, texto}
    const newArrayNotas = [...this.state.notas, nota]
    const newState = {
      notas:newArrayNotas
    }

    this.setState(newState)
  }

  deletarNota(indice){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice,1);
    this.setState({notas:arrayNotas})
  }

  criarCategoria(nomeCategoria){
    const arrayCategorias = [...this.state.categorias, nomeCategoria];
    const newState = {categorias:arrayCategorias};
    this.setState(newState);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
        <ListaCategorias 
            categorias={this.state.categorias}
            criarCategoria={this.criarCategoria.bind(this)}
            />
          <ListaDeNotas 
            deletar={this.deletarNota.bind(this)}
            notas={this.state.notas}/>
         
        </main>
      </section>
    );
  }
}

export default App;
