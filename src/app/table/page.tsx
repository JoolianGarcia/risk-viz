"use client";
import { Inter } from "next/font/google";
import { csv } from "d3";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    csv("/data.csv").then((data: any) => {
      setData(data);
    });
  }, []);

  return (
    <div className=" relative col-span-12 ml-[80px] p-4">
      <div className="ml-4">
        <h4>Analysis of your properties at risk</h4>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsam
          labore repellat, modi tempora nam doloribus deserunt pariatur mollitia
          veniam aperiam odio quam magnam repellendus sunt doloremque? Eligendi,
          sint nemo!
        </p>
      </div>
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Asset Name</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Lat</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Long</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Business Category</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Risk Rating</div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">Year</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr
              key={index}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td className="px-6 py-4">{entry["Asset Name"]}</td>
              <td className="px-6 py-4">{entry["Lat"]}</td>
              <td className="px-6 py-4">{entry["Long"]}</td>
              <td className="px-6 py-4">{entry["Business Category"]}</td>
              <td className="px-6 py-4">{entry["Risk Rating"]}</td>
              <td className="px-6 py-4">{entry["Year"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
