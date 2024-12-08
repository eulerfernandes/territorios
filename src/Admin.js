import React, { useState } from "react";

function Admin() {
  const [territorios, setTerritorios] = useState([]);

  const selecionarTerritorio = (bairro) => {
    setTerritorios([...territorios, bairro]);
  };

  return (
    <div>
      <h1>Administração de Territórios</h1>
      <div>
        <button onClick={() => selecionarTerritorio("Bairro 1")}>
          Selecionar Bairro 1
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 2")}>
          Selecionar Bairro 2
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 3")}>
          Selecionar Bairro 3
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 4")}>
          Selecionar Bairro 4
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 5")}>
          Selecionar Bairro 5
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 6")}>
          Selecionar Bairro 6
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 7")}>
          Selecionar Bairro 7
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 8")}>
          Selecionar Bairro 8
        </button>
        <button onClick={() => selecionarTerritorio("Bairro  9")}>
          Selecionar Bairro 9
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 10")}>
          Selecionar Bairro 10
        </button>
      </div>

      <h2>Territorios Selecionados:</h2>
      <ul>
        {territorios.map((bairro, index) => (
          <li key={index}>{bairro}</li>
        ))}
      </ul>
    </div> //Div Principal De Admistração de Territorios
  );
}

export default Admin;
