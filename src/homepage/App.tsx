import { Dispatch, memo, SetStateAction, useState } from "react";
import RealTime from "./demos/preview/RealTime";
import Performance from "./demos/performance/Performance";
import "./main.css";

const Header = ({ setDemo }: { setDemo: Dispatch<SetStateAction<string>> }) => {
  return (
    <div id="header">
      <span id="header-text-container">
        <img id="header-icon" src="./react.svg" alt="react"></img>
        <span id="header-text">React Easy Code Editor</span>
      </span>
      <select id="demo-select" defaultValue="RealTime" onChange={(e) => setDemo(e.target.value)}>
        <option className="demo-select-option" value="RealTime">
          RealTime Demo
        </option>
        <option className="demo-select-option" value="Performance">
          Performance Demo
        </option>
        <option className="demo-select-option" value="MiniIDE">
          MiniIDE Demo
        </option>
      </select>
    </div>
  );
};

const Body = memo(({ demo }: { demo: string }) => {
  switch (demo) {
    case "RealTime":
      return <RealTime />;
    case "Performance":
      return <Performance />;
    case "MiniIDE":
      return <div>MiniIDE</div>;
  }
});

export default () => {
  const [demo, setDemo] = useState<string>("RealTime");
  return (
    <>
      <Header setDemo={setDemo} />
      <Body demo={demo} />
    </>
  );
};
