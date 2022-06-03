import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [userName, setUserName] = useState();
  const [avatar_url, setAvatarUrl] = useState();

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    const userName = localStorage.getItem("userName");
    const avatar_url = localStorage.getItem("imagemPerfil");

    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      setUserName(userName);
      setAvatarUrl(avatar_url);
      localStorage.clear();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <S.Container>
      <S.PerfilContainer>
        <S.ImgPerfil src={avatar_url} />
        <S.SubTitle>{userName}</S.SubTitle>
      </S.PerfilContainer>
      <S.Title>Lista de repositórios</S.Title>
      <S.List>
        {repositories.map((repo) => (
          <S.ListItem key={repo}>{repo}</S.ListItem>
        ))}
      </S.List>
      <S.LinkHome to="/"> Voltar a Homepage</S.LinkHome>
    </S.Container>
  );
}
/* dentro do S.List está sendo feito uso de programaçao declarativa e nao imperativa */
