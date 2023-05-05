"use client";
import { useRef, useEffect, useState, SetStateAction } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";
import { csv } from "d3";
import React from "react";

// interface property {}

export default function Mapbox(property: any) {
  const [data, setData] = useState([]);
  const [filteredAssets, setFilteredAssets] = useState(data);

  //on load use csv feature from d3 library to convert csv file into array of objects
  useEffect(() => {
    csv("/data-short.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  //filter assets by decade

  const filterByDecade = (decade: any) => {
    setFilteredAssets(
      data.filter((asset: any) => {
        return asset["Year"] === decade;
      })
    );
  };

  console.log(data);

  //create array of available decades from data
  const decades = Array.from(new Set(data.map((asset) => asset["Year"])));

  //initialize map
  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 5,
  });

  //Assign linear color scale (based on IBM carbon data visualization standards)
  data.forEach((property: any) => {
    const risk = property["Risk Rating"];
    const scaleindex = Math.round(risk * 10);
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

  return (
    <div className="relative col-span-12 ml-[80px]">
      <div className="absolute left-2 top-2 z-40 inline-block">
        <select
          onChange={(e) => filterByDecade(e.target.value)}
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="" disabled selected>
            Show by decade
          </option>

          {decades.map((decade, index) => {
            return <option key={index}>{decade}</option>;
          })}
        </select>
      </div>

      {/* Scale legend to improve readability */}
      <div className=" absolute bottom-6 right-4 z-50">
        <div className="flex  p-2">
          <div className="h-[10px] w-[30px] bg-[#f6f2ff]"></div>
          <div className="h-[10px] w-[30px] bg-[#e8daff]"></div>
          <div className="h-[10px] w-[30px] bg-[#d4bbff]"></div>
          <div className="h-[10px] w-[30px] bg-[#be95ff]"></div>
          <div className="h-[10px] w-[30px] bg-[#a56eff]"></div>
          <div className="h-[10px] w-[30px] bg-[#8a3ffc]"></div>
          <div className="h-[10px] w-[30px] bg-[#6929c4]"></div>
          <div className="h-[10px] w-[30px] bg-[#491d8b]"></div>
          <div className="h-[10px] w-[30px] bg-[#1c0f30]"></div>
        </div>
      </div>

      <Map
        {...viewport}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/joolian/clgwieh8700gt01qn17xs7knp"
        mapboxAccessToken={process.env.mapbox_key}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {filteredAssets.map((entry: any, index) => (
          <Marker
            key={index}
            longitude={entry["Long"]}
            latitude={entry["Lat"]}
            anchor="bottom"
            color={`${entry["markercolor"]}`}
          />
        ))}

        {/* <Popup
          longitude={entry["Long"]}
          latitude={entry["Lat"]}
          anchor="bottom"
        >
          You are here
        </Popup> */}

        {/* {filteredAssets.map((entry: any, index) => (
          <Popup
            key={index}
            longitude={entry["Long"]}
            latitude={entry["Lat"]}
            anchor="bottom"
            // onClose={() => setShowPopup(false)}
          >
            entry.
          </Popup>
        ))} */}
      </Map>
    </div>
  );
}
