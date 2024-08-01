import EasyCodeEditor, { DefaultDark } from "../lib/exports";

export default () => {
  return (
    <div
      style={{
        position: "relative",
        height: "50%",
        width: "50%",
        margin: "auto",
        top: "25%",
        resize: "both",
        overflow: "auto",
      }}
    >
      <EasyCodeEditor trapTab theme={DefaultDark} tabWidth={4} />
    </div>
  );
};
