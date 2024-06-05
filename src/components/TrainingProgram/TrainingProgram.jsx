import Header from "../Header/Header";
import styles from "./trainingProgram.module.scss";
import programs from "../../programs";
import ProgramImage from "./ProgramImage/ProgramImage";

const TrainingProgram = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.mainContainer}>
        <h1 className={styles.pageHeader}>The Absolute Athlete</h1>
        <ProgramImage/>
      </main>
    </div>
  );
};

export default TrainingProgram;
