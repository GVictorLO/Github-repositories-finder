import React, { useEffect, useState } from "react";
import * as S from "./styled";
import { useNavigate } from "react-router-dom";

export default function Repositories() {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    let repositoriesName = localStorage.getItem("repositoriesName");
    if (repositoriesName != null) {
      repositoriesName = JSON.parse(repositoriesName);
      setRepositories(repositoriesName);
      localStorage.clear();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <S.Title>Lista de repositórios</S.Title>
      <S.List>
        {repositories.map((repo) => (
          <S.ListItem>{repo}</S.ListItem>
        ))}
      </S.List>
      <S.LinkHome to="/"> Voltar a Homepage</S.LinkHome>
    </S.Container>
  );
}
/* dentro do S.List está sendo feito uso de programaçao declarativa e nao imperativa */
