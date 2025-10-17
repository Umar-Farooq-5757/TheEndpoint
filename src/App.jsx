import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import RequestBox from "./components/RequestBox";
import ResponseBox from "./components/ResponseBox";

function App() {
  const [resData, setResData] = useState({});
  return (
    <>
      <Header />
      <RequestBox setResData={setResData} />
      <ResponseBox resData={resData} />
    </>
  );
}

export default App;
