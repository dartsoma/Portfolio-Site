import React, { useState } from "react";
import TopNav from "./TopNav.jsx";
import Tab from "./Tab.jsx";
import SideNav from "./SideNav.jsx";
import "./assets/App.css";

function App() {
  const [globalTabNumber, setGlobalTabNumber] = useState(0);
  const [globalPageNumber, setGlobalPageNumber] = useState(0);

  // The definition can be found in tabs.jsx
  const tabs = [
    { name: "home", pages: 3 },
    { name: "projects", pages: 2 },
    { name: "models", pages: 2 },
    { name: "faq", pages: 1 },
    { name: "contact", pages: 1 },
  ];

  const pageCount = tabs[globalTabNumber].pages;

  return (
    <>
      <TopNav
        globalTab={globalTabNumber}
        setTabState={setGlobalTabNumber}
        setPageState={setGlobalPageNumber}
      />
      <Tab globalTab={globalTabNumber} globalPage={globalPageNumber} />
      <SideNav
        globalPage={globalPageNumber}
        setPageState={setGlobalPageNumber}
        pageCount={pageCount}
      />
    </>
  );
}

export default App;
