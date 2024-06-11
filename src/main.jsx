import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import "@fontsource/roboto";
import App from "./App.jsx";
import TrainingProgramPage from "./components/TrainingProgramPage/TrainingProgramPage.jsx";
import ExercisesPage from "./components/ExercisesPage/ExercisesPage.jsx";
import MuscleGroupExercisesPage from "./components/MuscleGroupExercisesPage/MuscleGroupExercisesPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/program", element: <TrainingProgramPage /> },
  {
    path: "/exercises",
    element: <ExercisesPage />,
    // children: [
    //   {
    //     path: ":muscleGroup",
    //     element: <MuscleGroupExercisesPage />,
    //   },
    // ],
  },
  { path: "/exercises/:muscleGroup", element: <MuscleGroupExercisesPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
