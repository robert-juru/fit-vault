import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import "./index.scss";
import "@fontsource/roboto";
import App from "./App.jsx";
import TrainingProgram from "./components/TrainingProgram/TrainingProgram.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "program", element: <TrainingProgram /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
