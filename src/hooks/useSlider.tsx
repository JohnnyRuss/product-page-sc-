import { useState } from "react";

export default function useSlider(images: string[] | null) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleSlider(i: number) {
    if (images && i > images?.length - 1) return setActiveIndex(0);
    else if (images && i < 0) return setActiveIndex(images.length - 1);
    else setActiveIndex(i);
  }

  return { handleSlider, activeIndex };
}
