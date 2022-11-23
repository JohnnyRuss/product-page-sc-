export interface ProductType {
  company: string;
  title: string;
  description: string;
  currentPrice: number;
  sale: number;
  price: number;
  images: string[];
  thumbnails: string[];
}

export interface SliderType {
  images: string[] | undefined;
  thumbnails: string[] | undefined;
  activeIndex: number;
  handleSlider: (i: number) => void;
}
