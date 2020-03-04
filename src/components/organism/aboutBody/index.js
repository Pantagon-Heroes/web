import React from "react";
import styles from "./styles.css";

export default function Body() {
  return (
    <div className="containerBody">
      <div className="col-md-10">
        <div className="textContainer">
          <p className="title">Sobre nós</p>
          <p>
            Pantagon Heroes é um jogo de TCG (Trading Card Game) criado em 2020
            pela empresa Policarpo Games, Tendo como tecnologia principal o
            React e o React Native para fazer seus sistemas tanto Web quanto
            Mobile
          </p>
          <p className="title">Como trabalhamos</p>
          <p>
            Atualmente utilizamos o OmniStack
            <b> (Node, React, react-native)</b>, para definir e estruturar
            nossas aplicações. O javascript se torna um motor extremamente
            potente em multiplas plataformas.
          </p>
          <div className="pd-20">
            <div className="frameworkContent">
              <p className="textComponents">
                <b>1 - Node</b>
                <p>
                  O Node.js é uma ferramenta para desenvolvimento backend
                  utilizando Javascript como linguagem de programação
                </p>
                <br></br>
                <b>2 - React</b>
                <p>
                  O React.js é um framework de desenvolvimento frontend que
                  utiliza Javascript como linguagem de programação para criar um
                  sistema de componentes dinâmicos
                </p>
                <br></br>
                <b>3 - React-native</b>
                <p>
                  Como o proprio nome já diz, o react-native é um framework para
                  desenvolvimento mobile nativo utilizando Javascript como
                  linguagem de programação.
                </p>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
