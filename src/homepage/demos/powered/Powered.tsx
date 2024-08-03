import "./powered.css";

export default () => {
  return (
    <div id="powered">
      <div id="powered-container">
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/Node-${"18181b"}?logo=nodedotjs&logoColor=white&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/React-${"18181b"}?logo=React&logoColor=white&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://shields.io/badge/TypeScript-${"18181b"}?logo=TypeScript&logoColor=FFF&style=flat-square`}
        />
        <img
          className="powered-container-img"
          src={`https://img.shields.io/badge/vite-${"18181b"}?style=flat-square&logo=vite&logoColor=white`}
        />
        <img
          className="powered-container-img"
          src={`https://img.shields.io/badge/vitest-${"18181b"}?style=flat-square&logo=vitest&logoColor=white`}
        />
      </div>
    </div>
  );
};
