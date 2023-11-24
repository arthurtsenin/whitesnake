import { StaticImageData } from "next/image";

import coffee from "&/images/life-grid/coffee.png";
import pause from "&/images/life-grid/coffee-pause.png";
import friends from "&/images/life-grid/friends.png";
import hands from "&/images/life-grid/hands.png";
import lego from "&/images/life-grid/lego.png";
import meet from "&/images/life-grid/meet.png";
import office from "&/images/life-grid/office.png";
import stadium from "&/images/life-grid/stadium.png";
import street from "&/images/life-grid/street.png";
import work from "&/images/life-grid/work.png";

export type ImagesType = {
  id: number;
  image: StaticImageData;
  class: string;
};

export const IMAGES: Array<ImagesType> = [
  { id: 1, image: coffee, class: "coffee" },
  { id: 2, image: work, class: "work" },
  { id: 3, image: friends, class: "friends" },
  { id: 4, image: meet, class: "meet" },
  { id: 5, image: lego, class: "lego" },
  { id: 6, image: street, class: "street" },
  { id: 7, image: hands, class: "hands" },
  { id: 8, image: pause, class: "pause" },
  { id: 9, image: stadium, class: "stadium" },
  { id: 10, image: office, class: "office" },
];
