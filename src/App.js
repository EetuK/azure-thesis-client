import React from "react";
import { API_URI } from "./config";

const App = () => {
  const [data, setData] = React.useState(undefined);

  const fetchData = async () => {
    try {
      const result = await fetch(`${API_URI}/`);
      console.log(result);
      const data = await result.json();
      console.log(data);
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const onButtonClick = async () => {
    const res = await fetch(`${API_URI}/`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    await fetchData();
    console.log(res);
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
      <h1>Web Application</h1>
      <br />
      <br />
      <h2>Number of the latest record: {data ? data.id : "ei tietoa"}</h2>
      <p>
        Updated:{" "}
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
        <button onClick={() => onButtonClick()}>Increase</button>
        <button style={{ marginLeft: "20px" }} onClick={() => fetchData()}>
          Fetch
        </button>
      </div>
    </div>
  );
};

export default App;
