import styles from "./programCard.module.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
  return (
    <article className={styles.card}>
      <Link to={`/program/${program.id}`}>
        <img
          className={styles.cardImage}
          src={program.programImage}
          alt="program image"
        />
        <h3 className={styles.programName}>{program.name}</h3>
      </Link>
      <div className={styles.cardDescription}>
        <span className={styles.cardDifficulty}>{program.difficulty}</span>
        <span className={styles.cardNrWorkouts}>{program.workoutsPerWeek}</span>
        <span className={styles.cardGoal}>{program.goal}</span>
        <span className={styles.cardWorkoutDuration}>
          {program.workoutDuration}
        </span>
      </div>
    </article>
  );
};
export default ProgramCard;
