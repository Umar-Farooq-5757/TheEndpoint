import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RequestBox from "./components/RequestBox";
import ResponseBox from "./components/ResponseBox";
import Footer from "./components/Footer";

function App() {
  const [resData, setResData] = useState({});
  const [selectedMethod, setSelectedMethod] = useState("GET");
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || false,
  );
  useEffect(() => {
    isDark
      ? (document.querySelector("html").style.backgroundColor = "#1a1a1a")
      : (document.querySelector("html").style.backgroundColor = "#edf3fb");
  }, [selectedMethod, isDark]);

  return (
    <main
      className={`${
        isDark ? "text-white bg-[#1a1a1a]" : "text-black bg-[#edf3fb]"
      } transition-all min-h-screen`}>
      <Header isDark={isDark} setIsDark={setIsDark} />
      <div className="flex items-center mx-4 my-4 gap-2">
        <p>Example URL: </p>
        <p className={`italic border ${isDark?'bg-white/10 border-white/20':'bg-black/10 border-black/20'} px-4 rounded-sm`}>https://jsonplaceholder.typicode.com/todos/</p>
      </div>
      <RequestBox
        isDark={isDark}
        setResData={setResData}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <div className="relative">
        <ResponseBox
          isDark={isDark}
          resData={resData}
          setResData={setResData}
        />
        <Footer isDark={isDark} resData={resData} />
      </div>
    </main>
  );
}

export default App;
