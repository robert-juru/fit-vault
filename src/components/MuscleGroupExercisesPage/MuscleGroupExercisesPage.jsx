import { useParams } from "react-router-dom";
import allExercises from "../ExercisesPage/exercises";
import Header from "../Header/Header";
import styles from "./muscleGroupExercisesPage.module.scss";

const MuscleGroupExercisesPage = () => {
  const { muscleGroup } = useParams();
  const exercises = allExercises[muscleGroup] || [];
  const primaryMuscleGroup =
    muscleGroup.charAt(0).toUpperCase() + muscleGroup.slice(1);
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.exercisesPageContainer}>
        <h1 className={styles.pageHeader}>{primaryMuscleGroup} Exercises</h1>
        <section className={styles.exercisesSection}>
          {exercises.length > 0 ? (
            exercises.map((exercise, index) => (
              <article className={styles.exerciseCard} key={index}>
                <img
                  className={styles.exerciseImage}
                  src={exercise.exerciseImage}
                  alt={exercise.name}
                />
                <div className={styles.exerciseDetails}>
                  <h2 className={styles.exerciseName}>{exercise.name}</h2>
                  <p className={styles.exerciseDescription}>
                    Primary muscle: {exercise.muscleGroup}
                  </p>
                </div>
              </article>
            ))
          ) : (
            <p>No exercises found for this muscle group.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default MuscleGroupExercisesPage;
