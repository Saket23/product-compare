//@flow

import React from "react";
import {Prices, Discount, FinalPrice, Price, Wrapper, Cross} from "./styles/selectedProduct"

import type {Product} from "./type"

type Props={
  product: Product,
  data: any,
  onCrossClick: ()=> any
}

const SelectedProduct = (props: Props) => {
  const {product, data, onCrossClick } = props
  const imageSource = data.products.compareSummary.images[product.id];
  const title = product.title;
  let price = data.products.compareSummary.productPricingSummary[product.id];

  return (
    <Wrapper>
      <Cross onClick={onCrossClick}><svg height="15pt" viewBox="0 0 365.696 365.696" width="15pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg></Cross>
      <img src={imageSource} height="200px" width="80%" alt="product" />
      <h3>{title}</h3>
      <Prices>
        <FinalPrice>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M124.608-.012h391.174c3.354 0 6.095 2.811 6.095 6.26V65.86c0 3.437-2.74 6.248-6.095 6.248H393.607c19.264 22.406 33.024 49.395 39.26 79.052h82.915c3.354 0 6.094 2.8 6.094 6.249v59.622c0 3.437-2.74 6.26-6.094 6.26h-82.915c-7.476 35.516-25.772 67.241-51.355 91.797-33.52 32.161-79.666 52.11-130.383 52.11v.201h-5.634l219.416 250.196c5.93 6.768-4.464 21.827-9.118 21.84l-101.446.578L120.12 372.914c-1.949-2.209-2.445-5.232-1.594-7.902v-97.82H251.13v.19c23.846 0 45.46-9.308 61.11-24.308 6.072-5.835 11.221-12.496 15.202-19.784H124.609c-3.343 0-6.083-2.823-6.083-6.26v-59.623c0-3.448 2.74-6.248 6.083-6.248h202.833c-3.98-7.287-9.13-13.972-15.201-19.783-15.65-15.012-37.265-24.32-61.111-24.32v.19H118.526V6.248c0-3.45 2.74-6.26 6.082-6.26z"/></svg>
        {parseInt(price.finalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </FinalPrice>
        <Price>
            <strike>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640"><path d="M124.608-.012h391.174c3.354 0 6.095 2.811 6.095 6.26V65.86c0 3.437-2.74 6.248-6.095 6.248H393.607c19.264 22.406 33.024 49.395 39.26 79.052h82.915c3.354 0 6.094 2.8 6.094 6.249v59.622c0 3.437-2.74 6.26-6.094 6.26h-82.915c-7.476 35.516-25.772 67.241-51.355 91.797-33.52 32.161-79.666 52.11-130.383 52.11v.201h-5.634l219.416 250.196c5.93 6.768-4.464 21.827-9.118 21.84l-101.446.578L120.12 372.914c-1.949-2.209-2.445-5.232-1.594-7.902v-97.82H251.13v.19c23.846 0 45.46-9.308 61.11-24.308 6.072-5.835 11.221-12.496 15.202-19.784H124.609c-3.343 0-6.083-2.823-6.083-6.26v-59.623c0-3.448 2.74-6.248 6.083-6.248h202.833c-3.98-7.287-9.13-13.972-15.201-19.783-15.65-15.012-37.265-24.32-61.111-24.32v.19H118.526V6.248c0-3.45 2.74-6.26 6.082-6.26z"/></svg>
        {parseInt(price.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </strike>
        </Price>
        <Discount>{price.totalDiscount}% off</Discount>
      </Prices>
    </Wrapper>
  );
};

export default SelectedProduct;
