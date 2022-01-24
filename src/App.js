import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

import Slider from "./Slider";

function App() {
  var something = 4;

  var [time, setTime] = useState(0);

  // useEffect(()=>{},[]);
  useEffect(() => {
    setInterval(() => {
      setTime((el) => el + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "20px",
        }}
      >
        <div> A Nice Website</div>
        <div>{`${parseInt(time / 60)} min ${time % 60} sec`}</div>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          onClick={() => {
            setTime(time + 60);
          }}
        >
          + Add 1s
        </button>
      </div>
      <br />
      <br />
      <br />
      <Slider />
    </div>
  );
}

export default App;
