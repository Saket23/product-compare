//@flow

import React from "react";
import { TriggerWrapper, DropdownCaret } from "./styles";

type Props = {
  setIsDropdownVisible: boolean => any,
  isDropdownVisible: boolean
}

const Trigger = (props: Props) => {
  const { setIsDropdownVisible, isDropdownVisible } = props;
  function handleOnclick() {
    setIsDropdownVisible(!isDropdownVisible);
  }
  return (
    <TriggerWrapper onClick={handleOnclick}>
      <span>Choose a product</span>
      <DropdownCaret />
    </TriggerWrapper>
  );
};

export default Trigger;
