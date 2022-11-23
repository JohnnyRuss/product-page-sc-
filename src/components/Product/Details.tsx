import React from "react";

import { DetailsContainer } from "./styles/productDetails.styles";
import ProductPriceBox from "./components/ProductPriceBox";
import AmountBTN from "./components/AmountBTN";
import AddToCardBTN from "./components/AddToCardBTN";

interface DetailsType {
  data: {
    company: string | undefined;
    title: string | undefined;
    description: string | undefined;
    price: number | undefined;
    currentPrice: number | undefined;
    sale: number | undefined;
    productAmount: number;
    handleAmount: (amount: number) => void;
  };
}

const Details: React.FC<DetailsType> = ({ data }) => {
  return (
    <DetailsContainer>
      <h4 className="company">{data.company}</h4>
      <h3 className="product-title">{data.title}</h3>
      <p className="product-description">{data.description}</p>
      <ProductPriceBox
        currentPrice={data.currentPrice}
        price={data.price}
        sale={data.sale}
      />
      <div className="card-btn--box">
        <AmountBTN
          handleAmount={data.handleAmount}
          productAmount={data.productAmount}
        />
        <AddToCardBTN />
      </div>
    </DetailsContainer>
  );
};

export default Details;
