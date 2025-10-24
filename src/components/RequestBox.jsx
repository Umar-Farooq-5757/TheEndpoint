import { useState } from "react";
import Logo from "./ui/Logo";
import Dropdown from "./ui/Dropdown";
import { Send } from "lucide-react";
import getMethod from "../utils/getMethod";
import RequestBody from "./RequestBody";
import toast, { Toaster } from "react-hot-toast";
import isValidUrl from "../utils/isValidURL.js";
import validateJSON from "../utils/validateJSON.js";
import axios from "axios";
import postMethod from "../utils/postMethod.js";
import putMethod from "../utils/putMethod.js";
import deleteMethod from "../utils/deleteMethod.js";

const RequestBox = ({ setResData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("GET");
  const [URL, setURL] = useState("");
  const [requestBody, setRequestBody] = useState("");

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

  const sendRequestGETMethod = () => {
    if (URL) {
      if (isValidUrl(URL)) {
        getMethod(URL, setResData);
      } else {
        toast.error("Please enter a valid URL");
      }
    }
  };
  const sendRequestPOSTMethod = () => {
    if (URL) {
      if (isValidUrl(URL)) {
        if (requestBody) {
          if (validateJSON(requestBody).valid) {
            const dataObject = JSON.parse(requestBody);
            postMethod(URL, dataObject, setResData);
          } else {
            toast.error("Invalid JSON in request body");
          }
        } else {
          toast.error("Request body is required for POST method");
        }
      } else {
        toast.error("Please enter a valid URL");
      }
    }
  };
  const sendRequestPUTMethod = () => {
    if (URL) {
      if (isValidUrl(URL)) {
        if (requestBody) {
          if (validateJSON(requestBody).valid) {
            const dataObject = JSON.parse(requestBody);
            putMethod(URL, dataObject, setResData);
          } else {
            toast.error("Invalid JSON in request body");
          }
        } else {
          toast.error("Request body is required for PUT method");
        }
      } else {
        toast.error("Please enter a valid URL");
      }
    }
  };
  const sendRequestDELETEMethod = () => {
    if (URL) {
      if (isValidUrl(URL)) {
        deleteMethod(URL, setResData);
      } else {
        toast.error("Please enter a valid URL");
      }
    }
  };
  return (
    <section className="bg-white mt-10 md:mx-3 px-3 md:px-8 py-4 shadow-md rounded-xl">
      <Toaster position="top-center" />
      <div className="flex gap-3">
        <Logo padding="6px" size={"16px"} />
        <h2 className="font-medium text-lg">New Request</h2>
      </div>
      <div className="mt-4">
        <h3 className="text-[#36465c] font-medium text-sm sm:text-[15px]">Method & URL</h3>
        <div className="my-2 flex flex-col sm:flex-row  gap-1 sm:gap-3">
          <Dropdown
            selectedMethod={selectedMethod}
            setSelectedMethod={setSelectedMethod}
            methods={methods}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setMethodBoxBackgroundColor={setMethodBoxBackgroundColor}
            setMethodBoxTextColor={setMethodBoxTextColor}
          />
          <input
            type="text"
            value={URL}
            onChange={(e) => setURL(e.target.value.trim())}
            autoComplete="off"
            placeholder="Enter URL..."
            className="border border-gray-300 mt-1 sm:mt-0 py-2 sm:py-0 shadow-sm pl-3 outline-[#2758fa] transition-all rounded-md grow"
          />
        </div>
      </div>
      {/* SHOW METHOD BUTTON */}
      <button
        className={`show-method border rounded-md w-36 md:w-44 mt-2 py-1 font-semibold`}
        style={{
          backgroundColor: methodBoxBackgroundColor,
          color: methodBoxTextColor,
          borderColor: methodBoxTextColor,
        }}
      >
        {selectedMethod}
      </button>
      {/* REQUEST BODY HERE */}
      {selectedMethod != "GET" && selectedMethod != "DELETE" && (
        <RequestBody
          requestBody={requestBody}
          setRequestBody={setRequestBody}
        />
      )}
      {/* SEND REQUEST BUTTON */}
      <button
        onClick={() => {
          if (selectedMethod == "GET") {
            sendRequestGETMethod();
          } else if (selectedMethod == "POST") {
            sendRequestPOSTMethod();
          } else if (selectedMethod == "PUT") {
            sendRequestPUTMethod();
          } else if (selectedMethod == "DELETE") {
            sendRequestDELETEMethod();
          }
        }}
        className={`${URL == "" && "opacity-60"} ${
          URL != "" && "cursor-pointer opacity-85 hover:opacity-100"
        } transition-all flex justify-center font-semibold items-center gap-3 bg-gradient-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md mt-10 py-2 px-3`}
      >
        <Send className="size-4" />
        <p>Send Request</p>
      </button>
    </section>
  );
};

export default RequestBox;
