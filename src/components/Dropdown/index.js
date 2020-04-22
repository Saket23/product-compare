//@flow

import React, { useRef, useState, useEffect } from "react";
import Trigger from "./Trigger";
import List from "./List";
import { Wrapper } from "./styles";

import type {Product} from "../type"

type Props = {
  options:  Array<Product>,
  onListClick: ()=> any
}

const Dropdown = (props: Props) => {
  const { options, onListClick } = props
  const currentNode:any = useRef();

  const [isDropdownVisible, setIsDropdownVisible]:[boolean, ((boolean => boolean) | boolean) => void] = useState(false);

  useEffect(() => {
    if (isDropdownVisible) {
      document.addEventListener("mousedown", handleClick);
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }
  });

  const handleClick = (e: any) => {
    if (
      currentNode &&
      currentNode.current.innerHTML.includes(e.target.innerHTML)
    ) {
      // inside click
      return;
    }
    // outside click
    setIsDropdownVisible(false);
  };

  return (
    <Wrapper ref={currentNode}>
      <Trigger
        setIsDropdownVisible={setIsDropdownVisible}
        isDropdownVisible={isDropdownVisible}
      />
      <List
        options={options}
        listVisible={isDropdownVisible}
        onListClick={onListClick}
        setIsDropdownVisible={setIsDropdownVisible}
      />
    </Wrapper>
  );
};

export default Dropdown;
