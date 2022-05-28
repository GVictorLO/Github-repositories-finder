import React, { useState } from "react";
import axios from "axios";

function App() {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <h1>Primeiro projetinho react</h1>
      <button type="button" onClick={handlePesquisa}>
        Buscar
      </button>
      <input
        name="usuario"
        className="usuario"
        id="usuario"
        type="text"
        placeholder="Nome de usuário"
        onChange={(e) => setUsuario(e.target.value)}
      ></input>
    </>
  );
}
export default App;
// essa jeito de lidar com o evento na propriedade onCahnge,
// que vai mudar o valor do usuario de fato
