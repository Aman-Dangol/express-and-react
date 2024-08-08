import React from "react";

export default function App() {
  const apiCall = () => {
    fetch("http://localhost:8000/").then(async (data) =>
      console.log(await data.text())
    );
  };
  return (
    <div>
      asdada
      <button onClick={apiCall}>click!! and check console</button>
    </div>
  );
}
