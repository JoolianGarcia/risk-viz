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

  const sample = data[0];

  console.log(sample);
  return (
    <div className=" relative col-span-11">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Asset Name
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Lat
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Long
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Business Category
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Risk Rating
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Year
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-3 w-3"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 320 512"
                  >
                    <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                  </svg>
                </a>
              </div>
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
