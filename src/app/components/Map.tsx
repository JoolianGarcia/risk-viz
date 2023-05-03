"use client";
import { useRef, useEffect, useState, SetStateAction } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";
import { csv } from "d3";
import React from "react";

export default function Mapbox() {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data-short.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  data.forEach((property) => {
    const risk = property["Risk Rating"];
    const scaleindex = Math.round(risk * 10);
    console.log(scaleindex);
    switch (scaleindex) {
      case 0:
        property.markercolor = "#f6f2ff";
        break;
      case 1:
        property.markercolor = "#e8daff";
        break;
      case 2:
        property.markercolor = "#d4bbff";
        break;
      case 3:
        property.markercolor = "#be95ff";
        break;
      case 4:
        property.markercolor = "#a56eff";
        break;
      case 5:
        property.markercolor = "#8a3ffc";
        break;
      case 6:
        property.markercolor = "#6929c4";
        break;
      case 7:
        property.markercolor = "#491d8b";
        break;
      case 8:
        property.markercolor = "#31135e";
        break;
      case 8:
        property.markercolor = "#1c0f30";
        break;
    }
  });

  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 5,
  });

  return (
    <div className="relative col-span-11">
      {/* <div className="absolute left-2 top-2 z-40 inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            Show by Decade
            <svg
              className="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <div
            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              <form method="POST" action="#" role="none">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-3"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      <Map
        {...viewport}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/joolian/clgwieh8700gt01qn17xs7knp"
        mapboxAccessToken={process.env.mapbox_key}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {data.map((entry, index) => (
          <Marker
            key={index}
            longitude={entry["Long"]}
            latitude={entry["Lat"]}
            anchor="bottom"
            color={`${entry["markercolor"]}`}
          />
        ))}
        {/* {showPopup && (
          <Popup
            longitude={-79.3832}
            latitude={43.6532}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            You are here
          </Popup>
        )} */}
      </Map>
    </div>
  );
}
