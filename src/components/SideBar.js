import React from "react";

const SideBar = () => {
  return (
    <div className="top-0 left-0 z-40 w-1/6 h-screen bg-gray-50 transition-transform -translate-x-full sm:translate-x-0">
      <button
        type="button"
        class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
        aria-controls="dropdown-example"
        data-collapse-toggle="dropdown-example"
      >
        <span
          class="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item
        >
          Danh sách hội thảo
        </span>
        <svg
          sidebar-toggle-item
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <ul id="dropdown-example" class="py-2 space-y-2">
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group bg-gray-200 dark:text-white dark:hover:bg-gray-700"
          >
            Hội thảo trường công nghệ thông tin và truyền thông
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Hội thảo A
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            Hội thảo B
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
