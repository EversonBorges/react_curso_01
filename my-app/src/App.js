import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/Categorias";
import Notas from "./dados/Notas";

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaCategorias
            categorias={this.categorias}
            criarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
          />
          <ListaDeNotas
            deletar={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas} />
        </main>
      </section>
    );
  }
}

export default App;
