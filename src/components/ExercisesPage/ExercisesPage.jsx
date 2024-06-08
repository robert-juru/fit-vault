import ExercisesFilter from "./ExercisesFilter";
import Header from "../Header/Header";
import styles from "./exercisesPage.module.scss";

const ExercisesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <ExercisesFilter />
    </div>
  );
};

export default ExercisesPage;
