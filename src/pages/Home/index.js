import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

function HomeApp() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [erro, setErro] = useState(false);

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
        setErro(false);
        navigate("/repositories");
      })
      .catch((err) => {
        setErro(true);
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
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente!</S.ErrorMsg> : ""}
      </S.HomeContainer>
    </>
  );
}
export default HomeApp;
// essa jeito de lidar com o evento na propriedade onCahnge,
// que vai mudar o valor do usuario de fato

// navigate/useNavigate é o antigo useHistory e serve para renderizar as páginas,
// tanto ao clicar em buscar, quanto ao atualizar a página depois de já ter achado o repositório
