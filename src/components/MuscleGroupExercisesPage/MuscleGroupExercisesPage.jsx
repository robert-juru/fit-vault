import { useParams, Link } from "react-router-dom";
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
            exercises.map((exercise, index) => {
              const formattedExerciseName = exercise.name
                .replace(/\s+/g, "-")
                .toLowerCase();
              return (
                <article  key={index}>
                  <Link className={styles.exerciseCard} to={`/exercises/${muscleGroup}/${formattedExerciseName}`}>
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
                  </Link>
                </article>
              );
            })
          ) : (
            <p>No exercises found for this muscle group.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default MuscleGroupExercisesPage;
