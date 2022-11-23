import React, { useState } from "react";

import { ProductContainer } from "./styles/product.styled";
import Slider from "./SliderOut";
import Details from "./Details";
import Modal from "./Modal";

import { ProductType } from "../../Interface/types";

const Product: React.FC<{ data: ProductType | null }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [openModal, setOpenModal] = useState(false);
  const [productAmount, setProductAmount] = useState<number>(1);

  function handleSlider(i: number) {
    if (data?.images && i > data?.images?.length - 1) return setActiveIndex(0);
    else if (data?.images && i < 0)
      return setActiveIndex(data.images.length - 1);
    else setActiveIndex(i);
  }

  function handleAmount(amount: number) {
    if (amount < 1) return setProductAmount(1);
    else setProductAmount(amount);
  }

  return (
    <ProductContainer>
      <Slider
        images={data?.images}
        thumbnails={data?.thumbnails}
        activeIndex={activeIndex}
        handleSlider={handleSlider}
        setOpenModal={setOpenModal}
      />
      <Details
        data={{
          company: data?.company,
          title: data?.title,
          description: data?.description,
          price: data?.price,
          currentPrice: data?.currentPrice,
          sale: data?.sale,
          productAmount: productAmount,
          handleAmount: handleAmount,
        }}
      />
      {openModal && (
        <Modal
          images={data?.images}
          thumbnails={data?.thumbnails}
          activeIndex={activeIndex}
          handleSlider={handleSlider}
          setOpenModal={setOpenModal}
        />
      )}
    </ProductContainer>
  );
};

export default Product;
