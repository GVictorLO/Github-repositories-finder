import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
// import { useNavigate } from "react-router-dom";

function HomeApp() {
  const [usuario, setUsuario] = useState("");

  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesName",
          JSON.stringify(repositoriesName)
        );
      });
  }

  return (
    <>
      <S.Title>Bem vindo ao buscador de repositórios no Github</S.Title>
      <S.HomeContainer>
        <h2>Digite o nome de usuario que deseja ver os repositórios</h2>
        <S.Content>
          <S.Input
            className="usuario"
            id="usuario"
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
