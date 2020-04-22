//@flow

import React from "react";
import { ListWrapper, SingleList } from "./styles";

import type {Product} from "../type"

type Props = {
  options: Product[],
  listVisible: boolean,
  onListClick :(Product)=> any,
  setIsDropdownVisible: ((boolean => boolean) | boolean) => void
}

const List = (props: Props) => {
  const {
    options,
    listVisible,
    onListClick,
    setIsDropdownVisible
  } = props;
  const handleListClick = value => () => {
    onListClick(value);
    setIsDropdownVisible(false);
  };

  return (
    <ListWrapper listVisible={listVisible}>
      {options &&
        options.map(option => {
          return (
            <SingleList key={option.id} onClick={handleListClick(option)}>
              <span>{option.title}</span>
            </SingleList>
          );
        })}
    </ListWrapper>
  );
};

export default List;
