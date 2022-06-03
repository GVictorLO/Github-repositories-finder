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

export const SubTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-family: sans-serif;
  color: white;
  width: 300px;
  height: 200px;
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
  height: 250px;
  width: 1000px;
`;

export const ImgPerfil = styled.img`
  aspect-ratio: auto;
  height: 250px;
  border: 2px solid #;
  border-radius: 50%;
`;
