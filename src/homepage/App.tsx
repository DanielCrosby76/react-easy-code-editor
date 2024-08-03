import RealTime from "./demos/preview/Preview";
import Performance from "./demos/performance/Performance";
import Theme from "./demos/theme/Theme";
import Simple from "./demos/simple/Simple";
import Powered from "./demos/powered/Powered";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism.css";
import "./main.css";

const Header = () => {
  return (
    <div id="header">
      <div id="header-container">
        <span id="header-text-container">
          <img id="header-icon" src="./react.svg" alt="react"></img>
          <span id="header-text">React Easy Code Editor</span>
        </span>
        <div id="theme-select">🌒</div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <>
      <Header />
      <RealTime />
      <Performance />
      <Theme />
      <Simple />
      <Powered />
    </>
  );
};
