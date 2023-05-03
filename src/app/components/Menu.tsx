"use client";
import { BsTable, BsFillBarChartLineFill, BsFillMapFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 col-span-1 h-[100vh] border-r border-gray-300 bg-gray-100 px-2 pt-8">
      <a href="/">
        {/* <svg
          className="ml-8"
          width="40"
          height="40"
          viewBox="0 0 200 200"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clipPath="url(#clip0_104_35)">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z"
              fill="#172554"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_104_35"
              x1="14"
              y1="26"
              x2="179"
              y2="179.5"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stopColor="#E9B8FF" />{" "}
              <stop offset="1" stopColor="#F9ECFF" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_104_35">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg> */}
      </a>

      <ul className=" text-xs text-gray-600 ">
        <li
          className={
            pathname === "/"
              ? " mb-2 flex rounded-full bg-blue-200 px-4 py-2 align-middle text-blue-700 "
              : "mb-2 flex px-4 py-2 align-middle "
          }
        >
          <Link
            href="/"
            className={
              pathname === "/"
                ? "flex items-center align-middle"
                : "flex items-center align-middle "
            }
          >
            <BsFillMapFill className="mr-2 text-xs" /> Map
          </Link>
        </li>
        <li
          className={
            pathname === "/table"
              ? " mb-2 flex rounded-full bg-blue-200 px-4 py-2 align-middle text-blue-700 "
              : "mb-2 flex px-4 py-2  align-middle "
          }
        >
          <Link href="/table" className="flex items-center align-middle">
            <BsTable className="mr-2 text-xs  " /> Table
          </Link>
        </li>
        <li
          className={
            pathname === "/analysis"
              ? " mb-2 flex rounded-full bg-blue-200 px-4 py-2 align-middle text-blue-700"
              : "mb-2 flex px-4 py-2  align-middle "
          }
        >
          <Link href="/table" className="flex items-center align-middle">
            <BsFillBarChartLineFill className="mr-2 text-xs text-gray-400" />{" "}
            Analysis
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
