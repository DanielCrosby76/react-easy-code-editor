import { useState } from "react";
import LivePreview from "./demos/preview/RealTimePreview";
import "./main.css";

const Header = () => {
  return (
    <div id="header">
      <img id="header-icon" src="./react.svg" alt="react"></img>
      <span id="header-text">React Easy Code Editor</span>
    </div>
  );
};

export default () => {
  const [demo, setDemo] = useState<string>("LivePreview");
  return (
    <>
      <Header />
      <div id="demo-container">
        <LivePreview />
      </div>
    </>
  );
};
