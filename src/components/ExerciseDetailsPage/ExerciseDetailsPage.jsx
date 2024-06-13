import { useParams, Link } from "react-router-dom";
import allExercises from "../ExercisesPage/exercises";
import Header from "../Header/Header";
import styles from "./exerciseDetailsPage.module.scss";
import MuscleGroupCard from "../ExercisesPage/MuscleGroupCard";
import muscleGroupsFilter from "../ExercisesPage/muscleGroupsFilter";
import ReactPlayer from "react-player";

const ExerciseDetailsPage = () => {
  const { muscleGroup, exercise } = useParams();
  const exercises = allExercises[muscleGroup] || [];
  const selectedExercise = exercises.find(
    (ex) => ex.name.replace(/\s+/g, "-").toLowerCase() === exercise
  );

  if (!selectedExercise) {
    return (
      <div>
        <Header />
        <h1 className={styles.pageHeader}>No exercise found.</h1>
        <Link className={styles.linkToExercises} to="/exercises">
          Back to exercise list.
        </Link>
      </div>
    );
  }

  const steps = selectedExercise.description
    .split(/(?=Step \d+\.\s+)/)
    .map((step) => step.trim())
    .filter(Boolean);

  const actualMuscleGroup =
    muscleGroup === "all"
      ? selectedExercise.muscleGroup.toLowerCase()
      : muscleGroup;

  const muscleGroupData = muscleGroupsFilter.find(
    (group) => group.page.toLowerCase() === actualMuscleGroup
  );

  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.exerciseDetailsContainer}>
        <section className={styles.leftContainer}>
          <h1 className={styles.exercisePageHeader}>{selectedExercise.name}</h1>
          <img
            className={styles.exerciseImage}
            src={selectedExercise.exerciseImage}
            alt={`${selectedExercise.name} image`}
          />
        </section>
        <section className={styles.rightContainer}>
          <h2 className={styles.mainMuscleHeader}>Main Muscle Worked</h2>
          {muscleGroupData && (
            <MuscleGroupCard
              className={styles.muscleGroupImage}
              muscle={muscleGroupData}
            />
          )}
        </section>
        <section className={styles.exerciseDescription}>
          <h2 className={styles.instructionsHeader}>Instructions</h2>
          {steps.map((step, index) => (
            <p key={index} className={styles.exerciseStep}>
              {step.trim()}
            </p>
          ))}
        </section>
        <div className={styles.playerWrapper}>
            <ReactPlayer
              className={styles.reactPlayer}
              url={selectedExercise.video}
            />
          </div>
      </main>
    </div>
  );
};

export default ExerciseDetailsPage;
