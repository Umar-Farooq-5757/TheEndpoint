import { useState } from "react";
import Logo from "./ui/Logo";
import Dropdown from "./ui/Dropdown";
import { Send } from "lucide-react";

const RequestBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("GET");
const [URL, setURL] = useState('')

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

  const data = {
    id: 1,
    name: "Alice Johnson",
    details: {
      age: 30,
      city: "New York",
    },
    roles: ["admin", "editor"],
  };
  return (
    <section className="bg-white mt-10 mx-3 px-8 py-4 shadow-md rounded-xl">
      <div className="flex gap-3">
        <Logo padding="6px" size={"16px"} />
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
            value={URL}
            onChange={(e)=>setURL(e.target.value.trim())}
            autoComplete="off"
            placeholder="Enter URL..."
            className="border border-gray-300 shadow-sm pl-3 outline-blue-400 transition-all rounded-md grow"
          />
        </div>
        {/* SHOW METHOD BUTTON */}
        <button
          className={`show-method border rounded-md w-44 mt-2 py-1 font-semibold`}
          style={{
            backgroundColor: methodBoxBackgroundColor,
            color: methodBoxTextColor,
            borderColor: methodBoxTextColor,
          }}
        >
          {selected}
        </button>
      </div>
      {/* SEND REQUEST BUTTON */}
      <button className={`${URL=='' &&'opacity-50'} ${URL!='' &&'cursor-pointer'} transition-all flex justify-center font-semibold items-center gap-3 bg-gradient-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md my-4 py-2 px-3`}>
        <Send className="size-4"/>
        <p>Send Request</p>
      </button>
    </section>
  );
};

export default RequestBox;
