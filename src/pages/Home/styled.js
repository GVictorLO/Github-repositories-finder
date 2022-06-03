import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-family: sans-serif;
  color: white;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-family: sans-serif;
  color: white;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 2px solid #ddd;
  height: 2.8rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem 0 0 0.5rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 3.3rem;
  border: 2px solid #000;
  background-color: #238636;
  color: #fff;
  border-radius: 0 0.5rem 0.5rem 0;
  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const HomeLogo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 362px;
  aspect-ratio: auto 362 / 204;
  height: 204px;
`;

export const ErrorMsg = styled.span`
  display: block;
  font-size: 2rem;
  color: red;
  font-weight: 600;
  margin-top: 1rem;
`;
