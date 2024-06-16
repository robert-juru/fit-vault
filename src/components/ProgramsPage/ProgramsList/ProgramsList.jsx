import ProgramCard from "./ProgramCard.jsx";
import styles from "./programsList.module.scss";
import programs from "../../../programs.jsx";

const ProgramsList = () => {
  let programCards = programs.map((program) => (
    <ProgramCard key={program.id} program={program} />
  ));

  return <section className={styles.container}>{programCards}</section>;
};

export default ProgramsList;
