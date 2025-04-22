"use client";
import React, { useEffect, useRef } from "react";
import mapStyles from "@/assets/maps.json";
import clsx from "clsx";
import styles from "./Map.module.scss";
import Marker from "@/components/Marker/Marker";

function Map({ address, className }) {
  const mapRef = useRef(null);

  useEffect(() => {
    async function initMap() {
      if (mapRef.current && address) {
        await ymaps3.ready;

        const {
          YMap,
          YMapDefaultSchemeLayer,
          YMapDefaultFeaturesLayer,
          YMapMarker,
        } = ymaps3;

        const searchResponse = await ymaps3.search({ text: address });

        const coordinates = searchResponse[0].geometry.coordinates;

        const map = new YMap(
          mapRef.current,
          {
            location: { center: coordinates, zoom: 16 },
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
              coordinates: coordinates,
              draggable: false,
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
