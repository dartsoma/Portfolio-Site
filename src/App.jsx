import React, { useState } from "react";
import TopNav from "./TopNav.jsx";
import Tab from "./Tab.jsx";
import SideNav from "./SideNav.jsx";
import "./assets/App.css";

function App() {
  const [globalTabNumber, setGlobalTabNumber] = useState(0);
  const [globalPageNumber, setGlobalPageNumber] = useState(0);

  return (
    <>
      <TopNav globalTab={globalTabNumber} setTabState={setGlobalTabNumber} />
      <Tab globalTab={globalTabNumber} globalPage={globalPageNumber} />
      <SideNav
        globalPage={globalPageNumber}
        setPageState={setGlobalPageNumber}
      />
    </>
  );
}

export default App;
