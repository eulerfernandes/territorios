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
          Selecionar Bairro Centro
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 2")}>
          Selecionar Bairro Pintagueira
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 3")}>
          Selecionar Bairro Novo Itajuipe
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 4")}>
          Selecionar Bairro Alto da Liberdade
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 5")}>
          Selecionar Bairro Badaro
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 6")}>
          Selecionar Bairro Urbis
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 7")}>
          Selecionar Bairro Santa é Virgens
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 8")}>
          Selecionar Bairro Santo Antonio
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 9")}>
          Selecionar Bairro Avenida Itabuna
        </button>
        <button onClick={() => selecionarTerritorio("Bairro 10")}>
          Selecionar Bairro Sagrado Coração de Jesus
        </button>
      </div>

      <h2>Territórios Selecionados:</h2>
      <ul>
        {territorios.map((bairro, index) => (
          <li key={index}>{bairro}</li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;
