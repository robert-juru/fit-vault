import programs from "../../../programs";
import styles from "./programCard.module.scss";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const ProgramCard = () => {
  let programCards = programs.map((program, i) => {
    return (
      <article className={styles.card} key={i}>
        <Link to="program">
          <img
            className={styles.cardImage}
            src={program.programImage}
            alt="program image"
          />
          <h3 className={styles.programName}>{program.name}</h3>
        </Link>
        <div className={styles.cardDescription}>
          <span className={styles.cardDifficulty}>{program.difficulty}</span>
          <span className={styles.cardNrWorkouts}>
            {program.workoutsPerWeek}
          </span>
          <span className={styles.cardGoal}>{program.goal}</span>
          <span className={styles.cardWorkoutDuration}>
            {program.workoutDuration}
          </span>
        </div>
      </article>
    );
  });
  return <Fragment>{programCards}</Fragment>;
};
export default ProgramCard;
