/* eslint-disable-eslint-comments/no-use */
/* eslint-disable-eslint-comments/disable-enable-pair */
/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import Script from "next/script";
import { FC, useRef } from "react";

import "./YandexMap.css";

import icon from "&/yandex_placemark.svg";

export const YandexMap: FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div className="yandexMapContainer" ref={ref} id="map" />
      <Script
        //нужно вставить ключ босса а не мой блят
        src="https://api-maps.yandex.ru/2.1/?apikey=c7227578-4951-445c-866e-370ad48303bb&lang=ru_RU"
        onLoad={() => {
          ymaps.ready(() => {
            const DARK_MAP = "custom#dark";

            const myApp = new ymaps.Map(ref.current, {
              center: [53.860671, 27.479101],
              zoom: 17,
              controls: [],
            });

            const text = ymaps.templateLayoutFactory.createClass(
              '<div class="yandexMap">Минск, БЦ Титан, </br> 20 этаж, офис 207</div>',
            );

            const myPlacemark = new ymaps.Placemark(
              myApp.getCenter(),
              {},
              {
                iconLayout: "default#image",
                iconImageHref: icon.src,
                iconImageSize: [80, 80],
                iconImageOffset: [-50, -80],
              },
            );

            const myPlacemark2 = new ymaps.Placemark(
              myApp.getCenter(),
              {},
              {
                iconLayout: text,
              },
            );

            myApp.geoObjects.add(myPlacemark);
            myApp.geoObjects.add(myPlacemark2);

            ymaps.layer.storage.add(DARK_MAP, function DarkLayer() {
              return new ymaps.Layer(
                "https://core-renderer-tiles.maps.yandex.net/tiles?l=map&theme=dark&%c&%l&scale={{ scale }}",
              );
            });

            ymaps.mapType.storage.add(
              DARK_MAP,
              new ymaps.MapType("Dark Map", [DARK_MAP]),
            );

            myApp.setType(DARK_MAP);
          });
        }}
      />
    </>
  );
};
