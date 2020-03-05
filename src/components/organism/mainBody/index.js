import React from "react";
import styles from "./styles.css";

export default function Body() {
  return (
    <div className="containerBody">
      <div className="col-md-10">
        <div className="textContainer">
          <p className="title">
            Pantagon <span className="yellow-mark">Heroes</span>
          </p>
          <div className="alert-bagde">
            <p>
              Por favor, aguarde, logo estaremos disponivel na Play Store,
              estamos trabalhando na organização das arenas onde grandes
              batalhas serão travadas.
            </p>
          </div>
          <p className="text-padding">
            Transformaremos estratégias rápidas em epicas batalhas entre
            personalidades historicas e guerreiros lendarios. Monte seu deck e
            enfrente jogadores de todos os cantos do mundo em combates rápidos e
            energizantes.
          </p>
        </div>
      </div>
    </div>
  );
}
