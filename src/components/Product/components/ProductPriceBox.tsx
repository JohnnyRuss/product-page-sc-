import React from "react";

interface ProductPriceBoxType {
  currentPrice: number | undefined;
  sale: number | undefined;
  price: number | undefined;
}

const ProductPriceBox: React.FC<ProductPriceBoxType> = ({
  currentPrice,
  price,
  sale,
}) => {
  return (
    <div className="price-box">
      <p className="price-box__current-price--box">
        <span className="curr-price">${sale ? currentPrice : price}</span>
        {sale && <span className="curr-sale">{sale}%</span>}
      </p>
      {sale && <p className="price-box__old-price">${price}</p>}
    </div>
  );
};

export default ProductPriceBox;
