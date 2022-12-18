import React, { useState } from "react";

import { ProductContainer } from "./styles/product.styled";
import Slider from "./SliderOut";
import Details from "./Details";
import Modal from "./Modal";

import { ProductType } from "../../Interface/types";
import useSlider from "../../hooks/useSlider";

const Product: React.FC<{ data: ProductType | null }> = ({ data }) => {
  const [openModal, setOpenModal] = useState(false);
  const [productAmount, setProductAmount] = useState<number>(1);

  const [mediaForModal, setMediaForModal] = useState<{
    figs: string[];
    thumbnails: string[];
  }>();

  const { handleSlider, activeIndex } = useSlider(
    data?.images ? data.images : null
  );

  function handleAmount(amount: number) {
    if (amount < 1) return setProductAmount(1);
    else setProductAmount(amount);
  }

  function activateModalSlider() {
    setOpenModal(true);
    data?.images &&
      setMediaForModal({
        figs: data.images,
        thumbnails: data.thumbnails,
      });
  }

  return (
    data && (
      <ProductContainer>
        <Slider
          images={data.images}
          thumbnails={data.thumbnails}
          activeIndex={activeIndex}
          handleSlider={handleSlider}
          activateModalSlider={activateModalSlider}
        />
        <Details
          data={{
            company: data.company,
            title: data.title,
            description: data.description,
            price: data.price,
            currentPrice: data.currentPrice,
            sale: data.sale,
            productAmount: productAmount,
            handleAmount: handleAmount,
          }}
        />
        {openModal && (
          <Modal
            images={mediaForModal?.figs}
            thumbnails={mediaForModal?.thumbnails}
            activeIndex={activeIndex}
            handleSlider={handleSlider}
            setOpenModal={setOpenModal}
          />
        )}
      </ProductContainer>
    )
  );
};

export default Product;
