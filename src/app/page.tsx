"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { csv } from "d3";
import { useEffect, useState } from "react";
import Mapbox from "./components/Map";
import Menu from "./components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data-short.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  // const sample = data[0];

  // console.log(sample);

  // for (const key in sample) {
  //   console.log(key);
  //   console.log(sample[key]);
  // }

  // {
  //   data.map((entry, index) => console.log(entry, index));
  // }

  return (
    <div className="grid grid-cols-12">
      <Menu />

      <Mapbox />
    </div>
  );
}
