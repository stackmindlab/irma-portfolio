// main.jsx - Application entry point
// This is the first file React runs when the app loads
// It finds the root div in index.html and mounts the entire App inside it
// You will never need to edit this file for normal development

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Prevents browser from remembering scroll position on refresh
// Without this the page loads mid-scroll instead of at the top
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}
window.scrollTo(0, 0);

// Find the div with id="root" in index.html
// Mount the entire App component inside it
// StrictMode helps catch bugs during development - has no effect in production
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
