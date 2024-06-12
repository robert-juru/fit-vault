import { useParams } from "react-router-dom";
import allExercises from "../ExercisesPage/exercises";
import Header from "../Header/Header";
import styles from "./exerciseDetailsPage.module.scss";

const ExerciseDetailsPage = () => {
  const { muscleGroup, exercise } = useParams();
  const exercises = allExercises[muscleGroup] || [];
  const primaryMuscleGroup =
    muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1);
  const selectedExercise = exercises.find(
    (ex) => ex.name.replace(/\s+/g, "-").toLowerCase() === exercise
  );
  const steps = selectedExercise.description.split(/(?=\d+\.\s+)/).map(step => step.trim()); 

  console.log(steps)

  if (!selectedExercise) {
    return (
      <div>
        <Header />
        <h1 className={styles.pageHeader}>No exercise found.</h1>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main className={styles.exerciseDetailsContainer}>
        <section className={styles.leftContainer}>
          <h1 className={styles.exercisePageHeader}>{selectedExercise.name}</h1>
          <img className={styles.exerciseImage} src={selectedExercise.exerciseImage} alt={`${selectedExercise.name} image`} />
          {steps.map((step, index) => (
            <p key={index} className={styles.exerciseStep}>{step.trim()}</p> // Trim to remove any leading/trailing whitespace
          ))}
        </section>
        <section className={styles.rightContainer}>
          <img src={selectedExercise.muscleGroupImage} alt={`${primaryMuscleGroup} image`} />
        </section>
      </main>
    </div>
  );
};

export default ExerciseDetailsPage;
