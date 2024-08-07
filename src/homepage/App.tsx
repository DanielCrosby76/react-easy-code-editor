import Header from "./components/Header";
import ThemeProvider from "./ThemeProvider";
import PreviewEditor from "./components/PreviewEditor";
import PerformanceEditor from "./components/PerformanceEditor";
import ThemeEditor from "./components/ThemeEditor";
import SimpleEditor from "./components/SimpleEditor";
import Footer from "./components/Footer";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-css";
import "prismjs/components/prism-jsx";
import "prismjs/themes/prism-dark.css";
import "./main.css";

export default () => {
  return (
    <ThemeProvider>
      <Header />
      <PreviewEditor />
      <PerformanceEditor />
      <ThemeEditor />
      <SimpleEditor />
      <Footer />
    </ThemeProvider>
  );
};
