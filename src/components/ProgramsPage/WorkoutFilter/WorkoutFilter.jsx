import styles from "./workoutFilter.module.scss";
import SearchIcon from "@mui/icons-material/Search";

const WorkoutFilter = () => {
  return (
    <section className={styles.container}>
      <div className={styles.workoutProgramsContainer}>
        <h2>Workout programs</h2>
        <div className={styles.searchContainer}>
          <SearchIcon sx={{ position: "absolute", marginLeft: "8px" }} />
          <input type="search" placeholder="Search by program" />
        </div>
      </div>
      <div className={styles.filtersContainer}>
        <h3 className={styles.filterHeader}>Difficulty level</h3>
        <ul>
          <li>Beginner</li>
          <li>Novice</li>
          <li>Intermediate</li>
          <li>Advanced</li>
        </ul>
        <h3 className={styles.filterHeader}>Goal</h3>
        <ul>
          <li>Bodybuilding</li>
          <li>Powerlifting</li>
          <li>Powerbuilding</li>
          <li>Bodyweight Fitness</li>
        </ul>
        <h3 className={styles.filterHeader}>Workouts per week</h3>
        <ul>
          <li>2 Days</li>
          <li>3 Days</li>
          <li>4 Days</li>
          <li>5 Days</li>
          <li>6 Days</li>
        </ul>
        <h3 className={styles.filterHeader}>Workout duration</h3>
        <ul className={styles.lastFilter}>
          <li> &lt;30 Minutes </li>
          <li>30-45 Minutes</li>
          <li>45-60 Minutes</li>
          <li>&gt;60 Minutes</li>
        </ul>
      </div>
    </section>
  );
};

export default WorkoutFilter;
