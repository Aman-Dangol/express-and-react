import React from "react";
import { useState } from "react";

export default function App() {
  const [data, setData] = useState("click!! and check console");
  const apiCall = () => {
    fetch("http://localhost:8000/home").then(async (fdata) =>
      setData(await fdata.text())
    );
  };
  return (
    <div>
      asdada
      <button onClick={apiCall}>{data}</button>
      <a href="/home">home page</a>
    </div>
  );
}
