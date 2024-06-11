import { Fragment } from "react";
import muscleGroupsFilter from "./MuscleGroupsFilter";
import styles from "./exercisesPage.module.scss";
import { Link } from "react-router-dom";

const MuscleGroupCard = () => {
  return (
    <Fragment>
      {muscleGroupsFilter.map((muscle, index) => (
        <article className={styles.muscleGroupCard} key={index}>
          <Link to={`/exercises/${muscle.page.toLowerCase()}`}>
            <img
              className={styles.muscleGroupImage}
              src={muscle.image}
              alt={`${muscle.name} filter`}
            />
            <h3>{muscle.name}</h3>
          </Link>
        </article>
      ))}
    </Fragment>
  );
};

export default MuscleGroupCard;
