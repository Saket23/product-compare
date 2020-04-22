//@flow

import React, { useMemo } from "react";
import { GreyBox } from "./styles/selectProduct";
import { Wrapper } from "./styles/selectProduct";
import Dropdown from "./Dropdown";
import SelectedProduct from "./SelectedProduct";

import type {Product} from "./type"

type Props={
  dropdownOptions: Array<Product>,
  product: Product,
  onListClick: () => any,
  data: any,
  onCrossClick: ()=> any
}

const SelectProduct = (props:Props) => {
  const { dropdownOptions, product, onListClick, data, onCrossClick } = props;
  let isProductSelected = useMemo(() => Object.keys(product).length !== 0, [
    product
  ]);
  return (
    <Wrapper>
      {isProductSelected ? (
        <SelectedProduct product={product} 
        data={data}           
        onCrossClick={onCrossClick}
        />
      ) : (
        <>
          <GreyBox></GreyBox>
          <h3>Add a product</h3>
          <Dropdown options={dropdownOptions} onListClick={onListClick} />
        </>
      )}
    </Wrapper>
  );
};

export default SelectProduct;
