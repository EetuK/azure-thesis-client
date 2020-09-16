import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, setData] = React.useState(undefined);

  const fetchData = async () => {
    const result = await fetch("http://localhost:3001/v1");
    console.log(result);
    const data = await result.json();
    setData(data);
  };

  const onButtonClick = async () => {
    const result = await fetch("http://localhost:3001/v1", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log(result);
    const data = await result.json();
    console.log(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Web-sovellus</h1>
      <br />
      <br />
      <h2>Tietueen numero: {data ? data.id : "ei tietoa"}</h2>
      <p>
        Päivitetty:{" "}
        {data ? new Date(data.date_created).toLocaleString() : "ei tietoa"}
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <button onClick={() => onButtonClick()}>Päivitä</button>
        <button style={{ marginLeft: "20px" }} onClick={() => fetchData()}>
          Hae tiedot
        </button>
      </div>
    </div>
  );
};

export default App;
