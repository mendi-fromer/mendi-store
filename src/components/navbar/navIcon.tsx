import React from "react";

interface NavIconProps {
  iconURL: string;
  navTitle: string;
}

export const NavIcon = ({ iconURL, navTitle }: NavIconProps) => (
  <>
    <a href="https://flowbite.com/" className="flex items-center">
      <img src={iconURL} className="mr-3 h-8" alt="Flowbite Logo" />
      <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
        {navTitle}
      </span>
    </a>
    <button
      data-collapse-toggle="navbar-default"
      type="button"
      className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
      aria-controls="navbar-default"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-6 w-6"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  </>
);
