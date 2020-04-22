import styled from "styled-components";

export const Wrapper = styled.div`
  height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-bottom: 1px solid #dcdcdc;
`;

export const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 30px;

  h2 {
    margin-bottom: 5px;
  }
`;

export const Checkbox = styled.div`
  display: flex;
  font-size: 18px;
  input {
    margin-right: 10px;
  }
`;
