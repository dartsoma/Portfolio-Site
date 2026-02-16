import React, { useState } from "react";
import TopNav from "./TopNav.jsx";
import Tab from "./Tab.jsx";
import "./App.css";

function App() {
  const [globalTabNumber, setGlobalTabNumber] = useState(0);

  return (
    <>
      <TopNav globalTab={globalTabNumber} setTabState={setGlobalTabNumber} />

      <Tab globalTab={globalTabNumber} />
    </>
  );
}

export default App;
