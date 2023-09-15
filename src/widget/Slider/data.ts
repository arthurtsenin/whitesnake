import { StaticImageData } from "next/image";

export type SlideType = {
  id: number;
  text: string;
  image: StaticImageData | string;
};

export type SliderType = {
  [key: string]: SlideType;
};

export const SLIDER_SLIDES: SliderType = {
  1: { id: 1, text: "", image: "" },
  2: { id: 2, text: "", image: "" },
  3: { id: 3, text: "", image: "" },
  4: { id: 4, text: "", image: "" },
};

export type ProgressBarType = {
  id: number;
  title: string;
  hasProgressStripe?: boolean;
};

export type ProgressBarsType = {
  [key: string]: ProgressBarType;
};

export const PROGRESS_BARS: ProgressBarsType = {
  1: { id: 1, title: "", hasProgressStripe: true },
  2: { id: 2, title: "", hasProgressStripe: true },
  3: { id: 3, title: "", hasProgressStripe: true },
  4: { id: 4, title: "", hasProgressStripe: false },
};
