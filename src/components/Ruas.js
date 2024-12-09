import React, { useState } from "react";

function Ruas({ bairro }) {
  // Definindo as ruas para cada bairro
  const ruas = {
    "Bairro 1": ["Rua A", "Rua B", "Rua C"],
    "Bairro 2": ["Rua D", "Rua E", "Rua F"],
    "Bairro 3": ["Rua G", "Rua H", "Rua I"],
    // Adicione mais bairros e ruas conforme necessário
  };

  const [ruasSelecionadas, setRuasSelecionadas] = useState([]);

  const selecionarRua = (rua) => {
    setRuasSelecionadas([...ruasSelecionadas, rua]);
  };

  return (
    <div>
      <h3>Ruas de {bairro}</h3>
      <div>
        {ruas[bairro]?.map((rua, index) => (
          <button key={index} onClick={() => selecionarRua(rua)}>
            Selecionar {rua}
          </button>
        ))}
      </div>

      <h4>Ruas Selecionadas:</h4>
      <ul>
        {ruasSelecionadas.map((rua, index) => (
          <li key={index}>{rua}</li>
        ))}
      </ul>
    </div>
  );
}

export default Ruas;
