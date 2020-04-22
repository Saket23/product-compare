import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const LeftColumn = styled.div``;

export const Title = styled.div`
  padding: 10px;
  color: black;
  background-color: #F0F0F0;
  font-weight: 900;
  grid-column-start: 1;
  grid-column-end: 4;
`
export const Features= styled.div`
padding: 10px;
color: black;
font-weight: 600;
`;