import Header from "../Header/Header";
import styles from "./trainingProgram.module.scss";
import programs from "../../programs";
import ProgramImage from "./ProgramImage/ProgramImage";
import ProgramDescription from "./ProgramDescription/ProgramDescription";
import ProgramOverview from "./ProgramOverview/ProgramOverview";
import ProgramWorkout from "./ProgramWorkout/ProgramWorkout";

const TrainingProgram = () => {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.trainingProgramContainer}>
        <h1 className={styles.pageHeader}>The Absolute Athlete</h1>
        <ProgramImage/>
        <ProgramDescription/>
        <ProgramOverview/>
        <ProgramWorkout/>
      </main>
    </div>
  );
};

export default TrainingProgram;
