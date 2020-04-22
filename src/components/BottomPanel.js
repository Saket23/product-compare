import React, {Fragment} from "react";

import { Wrapper, LeftColumn, Title, Features } from "./styles/bottomPanel";

import type {Product} from "./type"

type Props ={
  data: any,
  firstProduct: Product,
  secondProduct: Product,
  showOnlyDiff: boolean
}

const BottomPanel = (props: Props) => {
  const { data, firstProduct, secondProduct, showOnlyDiff } = props
  return (
    <Wrapper>
        {data.products.featuresList.map(d => {
          return (
            <Fragment key={d.title}>
            <Title>{d.title.toUpperCase()}</Title>
            {d.features.map(f => 
            {
            if(!showOnlyDiff || (showOnlyDiff && f.values[firstProduct.id] !==f.values[secondProduct.id])){
              return(<Fragment key={f.featureName}>
                <Features >{f.featureName}</Features>
                <Features >{f.values[firstProduct.id]}</Features>
                <Features >{f.values[secondProduct.id]}</Features>
                </Fragment>
                )
            }
            else {
              return null
            }
            }
          )}
          </Fragment>
        )})}
    </Wrapper>
  );
};

export default BottomPanel;
