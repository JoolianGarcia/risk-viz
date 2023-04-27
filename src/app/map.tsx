"use client";
import { useRef, useEffect, useState, SetStateAction } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { csv } from "d3";

interface IProps {}

export default function Mapbox({}: IProps) {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  const mapRef = useRef<typeof Map | null>(null);

  const [viewport, setViewport] = useState({
    latitude: 40.7128,
    longitude: -74.006,
    zoom: 8,
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
        <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
          <span className=" animate-bounce cursor-pointer">📍</span>
        </Marker>

        {/* {data.map((entry, index) => (
          <Marker
            key={index}
            longitude={entry["Long"]}
            latitude={entry["Lat"]}
            anchor="bottom"
          />
        ))} */}
      </Map>
    </div>
  );
}
