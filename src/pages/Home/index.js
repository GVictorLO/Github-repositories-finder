import React, { useState } from "react";
import axios from "axios";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import LogoSrc from "./github-logo-background.jpg.webp";

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
          return repositoriesName.push(repository.name);
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

  function handleUser() {
    axios.get(`https://api.github.com/users/${usuario}`).then((response) => {
      const userData = response.data;
      const imgPerfilAdress = userData.avatar_url;
      localStorage.setItem("imagemPerfil", imgPerfilAdress);
      localStorage.setItem("userName", usuario);
    });
  }

  function handleClick() {
    handlePesquisa();
    handleUser();
  }

  return (
    <>
      <S.Title>Bem vindo ao buscador de repositórios no Github</S.Title>
      <S.HomeContainer>
        <S.HomeLogo src={LogoSrc} />
        <S.Subtitle>
          Digite o nome de usuario que deseja ver os repositórios
        </S.Subtitle>
        <S.Content>
          <S.Input
            className="usuario"
            id="usuario"
            placeholder="Nome de usuário"
            onChange={(e) => setUsuario(e.target.value)}
          ></S.Input>
          <S.Button type="button" onClick={handleClick}>
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
