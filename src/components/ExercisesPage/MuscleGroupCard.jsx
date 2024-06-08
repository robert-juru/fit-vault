import { Fragment } from "react";
import muscleGroupsFilter from "./MuscleGroupsFilter";
import styles from "./exercisesPage.module.scss";

const MuscleGroupCard = () => {
  let muscleGroups = muscleGroupsFilter.map((muscle, index) => {
    return (
      <article className={styles.muscleGroupCard} key={index}>
        <img className={styles.muscleGroupImage} src={muscle.image} alt="muscle group filter image" />
        <h3>{muscle.name}</h3>
      </article>
    );
  });

  return <Fragment>{muscleGroups}</Fragment>;
};

export default MuscleGroupCard;
