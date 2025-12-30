import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return <h1>IT WORKS</h1>;
};

const root = document.getElementById("root");

if (!root) {
  console.error("Root element not found");
} else {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
