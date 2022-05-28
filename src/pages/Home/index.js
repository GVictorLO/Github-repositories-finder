import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";

function HomeApp() {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => console.log(response.data));
  }

  return (
    <>
      <S.HomeContainer>
        <S.Content>
          <S.Input
            name="usuario"
            className="usuario"
            id="usuario"
            type="text"
            placeholder="Nome de usuário"
            onChange={(e) => setUsuario(e.target.value)}
          ></S.Input>
          <S.Button type="button" onClick={handlePesquisa}>
            Buscar
          </S.Button>
        </S.Content>
      </S.HomeContainer>
    </>
  );
}
export default HomeApp;
// essa jeito de lidar com o evento na propriedade onCahnge,
// que vai mudar o valor do usuario de fato
