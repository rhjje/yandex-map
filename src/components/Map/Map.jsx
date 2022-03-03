import React, { useState } from "react";
import { YMaps, Map, Placemark, SearchControl } from "react-yandex-maps";
import { MapTabs } from "./components/MapTabs";
import { ATMs, offices } from "./utils/templates";
import { mapPopup } from "./utils/mapPopup";
import marker from "./marker.svg";
import styles from "./Map.module.scss";
import "./Map.scss";

export const YandexMap = () => {
  const [selectedTabs, setSelectedTabs] = useState(0);

  let markers = offices;

  if (selectedTabs) {
    markers = ATMs;
  }

  return (
    <YMaps query={{ apikey: "54c1b06d-f63e-4351-a274-661b72e1165a" }}>
      <div className={styles.Map}>
        <MapTabs selectTab={setSelectedTabs}></MapTabs>
        <Map
          width="100%"
          height="100%"
          defaultState={{ center: [55.75, 37.57], zoom: 11 }}
        >
          <SearchControl
            options={{
              noPlacemark: true,
              placeholderContent: "Поиск по адресу",
              float: "right",
            }}
          />
          {markers.map((mark, i) => (
            <Placemark
              geometry={[mark.coordinates.lat, mark.coordinates.lng]}
              modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
              options={{
                iconLayout: "default#image",
                iconImageHref: marker,
                iconImageSize: [96, 96],
                hideIconOnBalloonOpen: false,
              }}
              properties={{
                balloonContentBody: mapPopup(mark.popup),
              }}
              key={i}
            />
          ))}
        </Map>
      </div>
    </YMaps>
  );
};