import styles from "./workoutFilter.module.scss";
import SearchBar from "./SearchBar";
import Filters from "./Filters";

const WorkoutFilter = () => {
  return (
    <section className={styles.container}>
      <SearchBar />
      <Filters />
    </section>
  );
};

export default WorkoutFilter;
