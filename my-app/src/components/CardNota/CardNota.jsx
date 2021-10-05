import React, { Component } from "react";
import "./estilo.css";
import {ReactComponent as IconDelete} from "../../assets/img/delete.svg";
class CardNota extends Component {

  apagar(){
    this.props.deletar(this.props.indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <IconDelete onClick={this.apagar.bind(this)}/>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
