import React, { useState } from "react";
import NavBar from "./components/organism/navBar";
import AboutBody from "./components/organism/aboutBody";
import HomeBody from "./components/organism/mainBody";
function App() {
  const [page, setPage] = useState("home");
  function renderPage() {
    switch (page) {
      case "aboutUs":
        return <AboutBody />;
      case "home":
        return <HomeBody />;
    }
  }
  return (
    <div className="App">
      <NavBar switchState={setPage} />
      <div>{renderPage()}</div>
    </div>
  );
}

export default App;
