import { useState } from "react";
import Logo from "./ui/Logo";
import Dropdown from "./ui/Dropdown";

const RequestBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("GET");
  const methods = [
    {
      type: "GET",
      backgroundColor: "#ecfdf5",
      textColor: "#009966",
    },
    {
      type: "POST",
      backgroundColor: "#eff6ff",
      textColor: "#155dfc",
    },
    {
      type: "PUT",
      backgroundColor: "#fff7ed",
      textColor: "#f5520c",
    },
    {
      type: "DELETE",
      backgroundColor: "#fef2f2",
      textColor: "#e7000b",
    },
  ];

  const [methodBoxBackgroundColor, setMethodBoxBackgroundColor] =
    useState("#ecfdf5");
  const [methodBoxTextColor, setMethodBoxTextColor] = useState("#009966");

  return (
    <section className="bg-white mt-10 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex gap-4">
        <Logo padding="2" />
        <h2 className="font-medium text-lg">New Request</h2>
      </div>
      <div className="mt-4">
        <h3 className="text-[#36465c] font-medium">Method & URL</h3>
        <div className="my-2 flex gap-3">
          <Dropdown
            selected={selected}
            setSelected={setSelected}
            methods={methods}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setMethodBoxBackgroundColor={setMethodBoxBackgroundColor}
            setMethodBoxTextColor={setMethodBoxTextColor}
          />
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter URL..."
            className="border border-gray-300 shadow-sm pl-3 outline-blue-400 transition-all rounded-md grow"
          />
        </div>
        {/* SHOW METHOD BUTTON */}
        <button
          className={`show-method border rounded-md w-44 mt-2 py-1 font-semibold`}
          style={{backgroundColor:methodBoxBackgroundColor,color:methodBoxTextColor,borderColor:methodBoxTextColor}}
        >
          {selected}
        </button>
      </div>
    </section>
  );
};

export default RequestBox;
