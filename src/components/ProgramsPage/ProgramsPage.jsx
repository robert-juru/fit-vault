import Header from "../Header/Header";
import WorkoutFilter from "./WorkoutFilter/WorkoutFilter";
import styles from "./programsPage.module.scss";
import ProgramsList from "./ProgramsList/ProgramsList";

const ProgramsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <h1 className={styles.pageHeader}>Workout Programs</h1>
        <WorkoutFilter />
        <ProgramsList />
      </main>
    </div>
  );
};

export default ProgramsPage;
