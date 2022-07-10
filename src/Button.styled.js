import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? "dodgerblue" : "white")};
  width: 150px;
  height: auto;
  border: 1px solid black;
  border-radius: 5px;
`;
