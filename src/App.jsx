import React from "react";
import { useState, useEffect } from "react";
function App() {
  let [num, setNum] = useState(0);

  useEffect(() => {
    console.log("from useEffect");
  }, [num]); // [] if empty the useEffect get triggered only one time

  function handleAdd() {
    setNum((num) => {
      return (num = num + 1);
    });
  }
  return (
    <div
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   height: "100vh",
      // }}
      style={{
        backgroundColor: "teal",
        width: "auto",
        height: "auto",
        borderRadius: "15px",
      }}
    >
      <center>
        <h2 style={{ color: "white", textDecoration: "underline" }}>
          Simple React Counter App
        </h2>
        <h3 style={{ color: "white" }}>Count -- {num} </h3>
        <button onClick={handleAdd}>Add</button>
        <br />
        <br />
        <button onClick={() => setNum((num) => (num = num - 1))}>Sub</button>
      </center>
    </div>
  );
}

export default App;
