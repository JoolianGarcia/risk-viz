"use client";
import { BsTable, BsFillBarChartLineFill, BsFillMapFill } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Menu() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 col-span-1 h-[100vh] border-r border-gray-300 bg-gray-900 px-2 pt-8">
      <a href="/">
        <svg
          className="p-2"
          width="60"
          height="60"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {" "}
          <g clip-path="url(#clip0_105_284)">
            {" "}
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 0H50V50H0V0ZM100 50H50V100H0V150H50V200H100V150H150V200H200V150H150V100H200V50H150V0H100V50ZM100 100H150V50H100V100ZM100 100V150H50V100H100Z"
              fill="url(#paint0_linear_105_284)"
            />{" "}
          </g>{" "}
          <defs>
            {" "}
            <linearGradient
              id="paint0_linear_105_284"
              x1="100"
              y1="0"
              x2="100"
              y2="200"
              gradientUnits="userSpaceOnUse"
            >
              {" "}
              <stop stop-color="#A7B5FF" />{" "}
              <stop offset="1" stop-color="#F3ACFF" />{" "}
            </linearGradient>{" "}
            <clipPath id="clip0_105_284">
              {" "}
              <rect width="200" height="200" fill="white" />{" "}
            </clipPath>{" "}
          </defs>{" "}
        </svg>
      </a>

      <ul className="mt-12 text-gray-600 ">
        <li
          className={
            pathname === "/"
              ? " mb-2 flex rounded-md bg-gray-800 px-4 py-2 align-middle  text-white "
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
            <BsFillMapFill className="mr-2  text-2xl" />
          </Link>
        </li>
        <li
          className={
            pathname === "/table"
              ? " mb-2 flex rounded-md bg-gray-800 px-4 py-2 align-middle  text-white "
              : "mb-2 flex px-4 py-2  align-middle "
          }
        >
          <Link href="/table" className="flex items-center align-middle">
            <BsTable className="mr-2  text-2xl " />
          </Link>
        </li>
        <li
          className={
            pathname === "/analysis"
              ? " mb-2 flex rounded-md bg-gray-800 px-4 py-2 align-middle  text-white"
              : "mb-2 flex px-4 py-2  align-middle "
          }
        >
          <Link href="/table" className="flex items-center align-middle">
            <BsFillBarChartLineFill className="mr-2 text-2xl text-gray-400" />
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Menu;
