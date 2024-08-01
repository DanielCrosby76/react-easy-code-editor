import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Dev from "./Dev";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>{!import.meta.env.DEV ? <Dev /> : <App />}</StrictMode>
);
