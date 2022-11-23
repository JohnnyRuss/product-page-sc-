import { createRoot } from "react-dom/client";
import App from "./App";
import Theme from "./Theme";

createRoot(document.getElementById("root") as HTMLElement).render(
  <Theme>
    <App />
  </Theme>
);
