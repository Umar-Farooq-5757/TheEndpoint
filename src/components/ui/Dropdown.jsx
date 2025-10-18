import React from "react";

const Dropdown = ({
  selectedMethod,
  setSelectedMethod,
  setIsOpen,
  isOpen,
  methods,
  setMethodBoxBackgroundColor,
  setMethodBoxTextColor,
}) => {
  const handleSelect = (method) => {
    setSelectedMethod(method);
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col w-44 text-sm relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 pr-2 py-2 border rounded-md bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
      >
        <span>{selectedMethod}</span>
        <svg
          className={`w-5 h-5 inline float-right transition-transform duration-200 ${
            isOpen ? "rotate-0" : "-rotate-90"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#6B7280"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button> 

      {isOpen && (
        <ul className="w-full bg-white border z-50 border-gray-300 rounded-md shadow-md mt-1 py-2 absolute top-9 **opacity-100 z-10**">
          {methods.map((method) => (
            <li
              key={method.type}
              className="px-4 py-2 bg-white transition-all hover:bg-gradient-to-r hover:from-[#2758fa] hover:to-[#4c3ff7] hover:text-white cursor-pointer"
              onClick={() => {
                handleSelect(method.type);
                setMethodBoxBackgroundColor(method.backgroundColor);
                setMethodBoxTextColor(method.textColor);
              }}
            >
              {method.type}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
