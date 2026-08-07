
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";
  import "./styles/refinements.css";
  import "./styles/codebase-pages.css";
  import "./styles/light-inner-pages.css";
  import "./styles/predikt-page.css";
  import "./styles/predikt-fixes.css";

  createRoot(document.getElementById("root")!).render(<App />);
  
