import React from "react";
import { useState } from "react";
import useCount from "../../Custom Hooks/useCount";
import useConsole from "../../Custom Hooks/useConsole";
import "./home.css";

function Home() {
  const [count, setCount] = useState(0);

  useConsole();

  useCount(count);

  return (
    <div id="home-1">
      <div id="home-2">
        <p id="text-1">Click On this button...👇</p>
        <button
          id="button-1"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click Me!
        </button>
        <p id="text-2">Hey, You have clicked me {count} Times...</p>
      </div>
    </div>
  );
}

export default Home;
