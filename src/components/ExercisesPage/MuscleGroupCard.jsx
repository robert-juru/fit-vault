import { Fragment } from "react";
import styles from "./exercisesPage.module.scss";
import { Link } from "react-router-dom";

const MuscleGroupCard = ({ muscle }) => {
  return (
    <Fragment>
      <article className={styles.muscleGroupCard}>
        <Link to={`/exercises/${muscle.page.toLowerCase()}`}>
          <img
            className={styles.muscleGroupImage}
            src={muscle.image}
            alt={`${muscle.name} filter`}
          />
          <h3>{muscle.name}</h3>
        </Link>
      </article>
    </Fragment>
  );
};

export default MuscleGroupCard;
