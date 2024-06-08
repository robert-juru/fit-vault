import styles from "./exercisesPage.module.scss";
import MuscleGroupCard from "./MuscleGroupCard";

const ExercisesFilter = () => {
  return (
    <>
      <main className={styles.exercisesPageContainer}>
        <h1 className={styles.pageHeader}>Exercises for Each Muscle Group</h1>
        <h2 className={styles.pageSubheader}>
          Discover exercises tailored to strengthen the specific muscle groups
          you want to focus on.
        </h2>
        <section className={styles.exercisesSection}>
          <MuscleGroupCard />
        </section>
      </main>
    </>
  );
};

export default ExercisesFilter;
