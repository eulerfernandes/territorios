import React from "react";

const Bairros = () => {
  const bairros = [
    "Centro",
    "Pintagueira",
    "Novo Itajuipe",
    "Alto da Liberdade",
    "Badaro",
    "Urbis",
    "Santa é Virgens",
    "Santo Antonio",
    "Avenida Itabuna",
    "Sagrado Coração de Jesus",
  ];

  return (
    <div>
      <h2>Bairro de Itajuipe</h2>
      <ul>
        {bairros.map((bairro, index) => (
          <li key={index}>{bairro}</li>
        ))}
      </ul>
    </div>
  );
};

export default Bairros;
