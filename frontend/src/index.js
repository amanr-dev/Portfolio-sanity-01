import App from "./App";
import "./input.css";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

const parent = createRoot(root);

parent.render(<App />);
