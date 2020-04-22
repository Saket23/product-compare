import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const TriggerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-right: 8px;
  color: #a9a9a9;
  position: relative;
  padding: 6px 0px;
  font-size: 18px;
  cursor: pointer;
  border-bottom: 5px solid rgba(27, 31, 35, 0.2);
`;

export const DropdownCaret = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  content: "";
  border-top-style: solid;
  border-top-width: 8px;
  border-right: 8px solid transparent;
  border-bottom: 0 solid transparent;
  border-left: 8px solid transparent;
`;

export const ListWrapper = styled.ul`
  padding-left: 0px;
  display: ${({ listVisible }) => (listVisible ? "flex" : "none")};
  flex-direction: column;
  font-size: 12px;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15);
  transition: all 0.25s ease-in-out 0s;
  position: absolute;
  z-index: 999;
  transition: 0.2s;
  width: 250px;
  opacity: ${({ listVisible }) => (listVisible ? 1 : 0)};
`;

export const Heading = styled.li`
  display: flex;
  font-size: 12px;
  padding: 16px 8px;
  flex: auto;
  justify-content: flex-start;
  background-color: #f8f8f8;
  font-weight: 600;
  padding: 8px 0px 8px 10px;
  border: 1px solid #d9d9d9;
`;

export const SingleList = styled.li`
  list-style-type: none;
  padding: 8px 16px;
  font-weight: 400;
  color: #24292e;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #d9d9d9;
  background-color: white;
  :hover {
    background-color: #f8f8f8;
  }
`;
