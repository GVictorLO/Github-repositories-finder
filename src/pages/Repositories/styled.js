import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  max-width: 991px;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: white;
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;

export const ListItem = styled.li`
  border-radius: 5px;
  margin: 0.5rem 0;
  background-color: #238636;
  font-family: sans-serif;
  color: white;
  padding: 0.5rem;
`;

export const LinkHome = styled(Link)`
  display: flex;
  width: 5rem;
  border-radius: 7px;
  text-align: center;
  margin: 2rem auto;
  font-family: sans-serif;
  color: white;
  background-color: #238636;
  padding: 0.5rem 0;
  color: #fff;
  text-decoration: none;
`;

export const PerfilContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 204px;
`;

export const ImgPerfil = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 362px;
  background-color: transparent;
  aspect-ratio: auto 362 / 204;
  height: 204px;
  border: 2px solid #;
`;

export const PerfilBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 204px;
  border: 2px solid #;
`;
