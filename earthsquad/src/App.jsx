import React from "react";
import Viktoria from "./components/Viktoria";
import Natali from "./components/Natali";
import Felicia from "./components/Felicia";
import Yvette from "./components/Yvette";
import Nicole from "./components/Nicole";

function App() {
  return (
    <div>
      <h1>Welcome to EarthSquad</h1>
      <div>
        <h2>Team Members</h2>
        <Viktoria />
        <Natali />
        <Felicia />
        <Yvette />
        <Nicole />
      </div>
    </div>
  );
}

export default App;
