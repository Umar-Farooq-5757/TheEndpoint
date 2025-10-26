import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RequestBox from "./components/RequestBox";
import ResponseBox from "./components/ResponseBox";
import Footer from "./components/Footer";

function App() {
  const [resData, setResData] = useState({});
  return (
    <>
      <Header />
      <RequestBox setResData={setResData} />
      <div className="relative">
        <ResponseBox resData={resData} setResData={setResData} />
        <Footer resData={resData} />
      </div>
    </>
  );
}

export default App;
