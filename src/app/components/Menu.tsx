import { BsTable, BsFillBarChartLineFill, BsMap } from "react-icons/bs";
import Link from "next/link";

function Menu() {
  return (
    <aside className="sticky top-0 col-span-1 h-screen pt-8">
      <div className=" sticky col-span-1 h-[100vh] px-4">
        <svg
          width="40"
          height="40"
          viewBox="0 0 200 200"
          fill="black"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clip-path="url(#clip0_104_35)">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
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
              <stop stop-color="#E9B8FF" />{" "}
              <stop offset="1" stop-color="#F9ECFF" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_104_35">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>

        <ul className="mt-8 text-xs text-gray-600">
          <li className=" mb-2 flex rounded-full bg-blue-300 px-2 py-1 text-blue-700">
            <Link href="/" className="flex">
              <BsTable className="mr-2 text-xs text-blue-700" /> Map
            </Link>
          </li>
          <li className="mb-2 px-2 py-1">
            <Link href="/table" className="flex">
              <BsMap className="mr-2 text-xs text-gray-400" /> Table
            </Link>
          </li>
          <li className="mb-2 flex px-2 py-1">
            <BsFillBarChartLineFill className="mr-2 text-xs text-gray-400" />{" "}
            Analysis
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Menu;