import ProgramCard from "./ProgramCard.jsx";
import styles from "./programsList.module.scss";
const ProgramsList = () => {
  return (
    <section className={styles.container}>
      <ProgramCard />
    </section>
  );
};

export default ProgramsList;
