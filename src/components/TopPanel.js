//@flow

import React, { PureComponent } from "react";
import SelectProduct from "./SelectProduct";
import { Wrapper, LeftPanel, Checkbox } from "./styles/topPanel";

import type {Product} from "./type"

type Props = {
  data: any,
  selectedCount: number,
  dropdownOptions: Array<Product>,
  onListClickFirst: () => any,
  onListClickSecond: () => any,
  firstProduct: Product,
  secondProduct: Product,
  onCrossClickFirst: ()=>any,
  onCrossClickSecond: ()=>any,
  handleShowOnlyDiff: ()=> any,
  showOnlyDiff: boolean
};

type State = {};

class TopPanel extends PureComponent<Props, State> {
  render() {
    const {
      data,
      selectedCount,
      dropdownOptions,
      onListClickFirst,
      onListClickSecond,
      firstProduct,
      secondProduct,
      onCrossClickFirst,
      onCrossClickSecond,
      handleShowOnlyDiff,
      showOnlyDiff
    } = this.props;
    return (
      <Wrapper>
        <LeftPanel>
          <div>
            <h2>Compare</h2>
            <div>{`${selectedCount} item selected`}</div>
          </div>
          <Checkbox>
            <input type="checkbox" onChange={handleShowOnlyDiff} checked={showOnlyDiff}/>
            <div>Show only differences</div>
          </Checkbox>
        </LeftPanel>
        <SelectProduct
          dropdownOptions={dropdownOptions.filter(o=>o.id !==secondProduct.id)}
          onListClick={onListClickFirst}
          product={firstProduct}
          data={data}
          onCrossClick={onCrossClickFirst}
        />
        <SelectProduct
          dropdownOptions={dropdownOptions.filter(o=>o.id !==firstProduct.id)}
          onListClick={onListClickSecond}
          product={secondProduct}
          data={data}
          onCrossClick={onCrossClickSecond}
        />
      </Wrapper>
    );
  }
}

export default TopPanel;
