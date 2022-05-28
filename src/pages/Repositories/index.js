import React from "react";
import * as S from "./styled";

export default function Repositories() {
  return (
    <>
      <S.Title>Lista de repositórios</S.Title>
      <S.Container>
        <S.List>
          <S.ListItem>Repositorios</S.ListItem>
          <S.ListItem>Repositorios</S.ListItem>
        </S.List>
        {/* <S.LinkHome> Voltar a Homepage</S.LinkHome> */}
      </S.Container>
    </>
  );
}
