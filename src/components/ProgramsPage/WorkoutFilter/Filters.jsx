import styles from "./workoutFilter.module.scss";
import programs from "../../../programs";

const Filters = () => {
  const getUniqueFilterValues = (key) => {
    return [...new Set(programs.map((program) => program[key]))];
  };
  const difficulties = getUniqueFilterValues("difficulty");
  const goals = getUniqueFilterValues("goal");
  const workoutsPerWeek = getUniqueFilterValues("workoutsPerWeek");
  const workoutsDuration = getUniqueFilterValues("workoutDuration");
  
  return (
    <div className={styles.filtersContainer}>
      <h3 className={styles.filterHeader}>Difficulty level</h3>
      <ul>
        {difficulties.map((difficulty, index) => (
          <li key={index}>{difficulty}</li>
        ))}
      </ul>
      <h3 className={styles.filterHeader}>Goal</h3>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <h3 className={styles.filterHeader}>Workouts per week</h3>
      <ul>
        {workoutsPerWeek.map((workout, index) => (
          <li key={index}>{workout}</li>
        ))}
      </ul>
      <h3 className={styles.filterHeader}>Workout duration</h3>
      <ul className={styles.lastFilter}>
        {workoutsDuration.map((duration, index) => (
          <li key={index}>{duration}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filters;
