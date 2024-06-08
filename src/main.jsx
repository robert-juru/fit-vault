import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import "./index.scss";
import "@fontsource/roboto";
import App from "./App.jsx";
import TrainingProgramPage from "./components/TrainingProgramPage/TrainingProgramPage.jsx";
import ExercisesPage from "./components/ExercisesPage/ExercisesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/program", element: <TrainingProgramPage /> },
  { path: "/exercises", element: <ExercisesPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
