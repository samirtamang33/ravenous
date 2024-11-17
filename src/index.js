import React from "react";
import { createRoot } from "react-dom/client"; // Import from 'react-dom/client'
import App from "./components/App/App";
import registerServiceWorker from "./registerServiceWorker";

// Create a root for the app
const container = document.getElementById("root");
const root = createRoot(container); // Create a root using createRoot

// Render the app into the root
root.render(<App />);

// Register the service worker
registerServiceWorker();
