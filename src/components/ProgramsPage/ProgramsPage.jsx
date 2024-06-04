import Header from "../Header/Header";
import WorkoutFilter from "./WorkoutFilter/WorkoutFilter";
import styles from "./programsPage.module.scss";
import ProgramsList from "./ProgramsList/ProgramsList";

const ProgramsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <div>
          <WorkoutFilter />
          <ProgramsList/>
        </div>
      </main>
    </div>
  );
};

export default ProgramsPage;
