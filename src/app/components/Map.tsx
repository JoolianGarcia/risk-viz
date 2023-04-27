"use client";
import { useRef, useEffect, useState, SetStateAction } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker, Popup } from "react-map-gl";
import { csv } from "d3";
import React from "react";

interface IProps {}

export default function Mapbox({}: IProps) {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  const [showPopup, setShowPopup] = React.useState(true);

  const mapRef = useRef<typeof Map | null>(null);

  const [viewport, setViewport] = useState({
    latitude: 43.6532,
    longitude: -79.3832,
    zoom: 5,
  });

  return (
    <div className="col-span-11 ">
      <Map
        {...viewport}
        style={{ width: "100%", height: "100vh" }}
        mapStyle="mapbox://styles/joolian/clgwieh8700gt01qn17xs7knp"
        mapboxAccessToken={process.env.mapbox_key}
        onMove={(evt) => setViewport(evt.viewport)}
        // ref={(instance) => (mapRef.current = instance)}
      >
        {/* <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
          <div className=" animate-bounce cursor-pointer text-3xl">📍</div>
        </Marker> */}

        {/* {data.map((entry, index) => (
          <Marker
            key={index}
            longitude={entry["Long"]}
            latitude={entry["Lat"]}
            anchor="bottom"
            color="#4338ca"
          />
        ))} */}
        {showPopup && (
          <Popup
            longitude={-79.3832}
            latitude={43.6532}
            anchor="bottom"
            onClose={() => setShowPopup(false)}
          >
            You are here
          </Popup>
        )}
      </Map>
    </div>
  );
}
