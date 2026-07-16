import { Shield } from "lucide-react";
import { useState } from "react";

const Authorization = ({ isDark, token, setToken }) => {
  const [selectedAuthMethod, setSelectedAuthMethod] = useState("no-auth");
  return (
    <div className="mt-3">
      <div className="flex items-center gap-2">
        <Shield size={"16px"} />
        <h2 className="font-medium text-lg">Authorization</h2>
      </div>
      {/* Tabs */}
      <div
        className={`flex items-center w-fit px-3 py-0.5 cursor-default rounded-sm gap-3 border ${isDark ? "bg-white/10 border-white/20" : "bg-black/10 border-black/20"}`}>
        <p
          onClick={() => setSelectedAuthMethod("no-auth")}
          className={`${selectedAuthMethod == "no-auth" && "bg-linear-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md px-2"}`}>
          No Auth
        </p>
        <p
          onClick={() => setSelectedAuthMethod("bearer-token")}
          className={`${selectedAuthMethod == "bearer-token" && "bg-linear-to-br from-[#2758fa] to-[#4c3ff7] text-white rounded-md px-2"}`}>
          Bearer Token
        </p>
      </div>
      {selectedAuthMethod == "bearer-token" && (
        <div>
          <input
            value={token}
            onChange={(e) => setToken(e.target.value)}
            className={`border ${isDark ? "bg-white/5 border-white/20" : "bg-black/5 border-black/20"} mt-3 px-3 rounded-sm py-1.5 w-full outline-[#2758fa] transition-all`}
            type="text"
            placeholder="Enter your bearer token"
          />
        </div>
      )}
    </div>
  );
};

export default Authorization;
