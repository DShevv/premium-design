"use client";
import React, { useEffect, useRef } from "react";
import mapStyles from "@/assets/maps.json";
import clsx from "clsx";
import styles from "./Map.module.scss";
import Marker from "@/components/Marker/Marker";

function Map({ className }) {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      if (mapRef.current) {
        await ymaps3.ready;

        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapMarker,
        } = ymaps3;

        const { YMapDefaultMarker } = await ymaps3.import(
          "@yandex/ymaps3-markers@0.0.1"
        );

        const map = new YMap(
          mapRef.current,
          {
            location: { center: [27.56272, 53.900846], zoom: 16 },
            mode: "vector",
          },
          [
            new YMapDefaultSchemeLayer({
              customization: mapStyles,
            }),
            new YMapDefaultFeaturesLayer({}),
          ]
        );

        map.addChild(
          new YMapMarker(
            {
              coordinates: [27.56272, 53.900846],
              draggable: true,
              mapFollowsOnDrag: true,
            },
            Marker()
          )
        );
      }
    }

    initMap();
  }, [mapRef]);

  return (
    <>
      <section ref={mapRef} className={clsx(styles.container, className)} />
    </>
  );
}

export default Map;
