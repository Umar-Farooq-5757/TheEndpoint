import { Plus, X } from "lucide-react";
import { useState } from "react";

const Headers = ({ isDark, headersObj, setHeadersObj }) => {
  const [newHeaderName, setNewHeaderName] = useState("");
  const [newHeaderValue, setNewHeaderValue] = useState("");

  const removeKey = (keyToRemove) => {
    setHeadersObj((prevHeadersObj) => {
      const { [keyToRemove]: _, ...rest } = prevHeadersObj;
      return rest;
    });
  };

  const addKey = (key, value) => {
    setHeadersObj((prevHeadersObj) => ({
      ...prevHeadersObj,
      [key]: value,
    }));
    setNewHeaderName("");
    setNewHeaderValue("");
  };
  return (
    <div className="mt-3">
      <h1 className="font-medium text-lg">Headers</h1>
      <div>
        {Object.entries(headersObj).map(([key, value], idx) => {
          return (
            <div key={idx} className="flex items-center gap-4">
              <input
              readOnly
                value={key}
                className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 px-3 rounded-sm py-1.5 w-full outline-[#2758fa] transition-all`}
                type="text"
                placeholder="Header name"
              />
              <input
              readOnly
                value={value}
                className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 px-3 rounded-sm py-1.5 w-full outline-[#2758fa] transition-all`}
                type="text"
                placeholder="Header value"
              />
              <button
                onClick={() => removeKey(key)}
                className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 rounded-sm p-1`}>
                <X className="opacity-60" />
              </button>
            </div>
          );
        })}
        <div className="flex items-center gap-4">
          <input
            value={newHeaderName}
            onChange={(e) => setNewHeaderName(e.target.value)}
            className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 px-3 rounded-sm py-1.5 w-full outline-[#2758fa] transition-all`}
            type="text"
            placeholder="Header name"
          />
          <input
            value={newHeaderValue}
            onChange={(e) => setNewHeaderValue(e.target.value)}
            className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 px-3 rounded-sm py-1.5 w-full outline-[#2758fa] transition-all`}
            type="text"
            placeholder="Header value"
          />
          <button
            disabled={newHeaderName == "" || newHeaderValue == ""}
            onClick={() => addKey(newHeaderName, newHeaderValue)}
            className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 rounded-sm p-1 disabled:cursor-not-allowed`}>
            <Plus className="opacity-60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Headers;
