import Header from "../Header/Header";
import styles from "./trainingProgram.module.scss";
import programs from "../../programs";
import ProgramImage from "./ProgramImage/ProgramImage";
import ProgramDescription from "./ProgramDescription/ProgramDescription";
import ProgramOverview from "./ProgramOverview/ProgramOverview";
import ProgramWorkout from "./ProgramWorkout/ProgramWorkout";
import useScrollToTop from "../useScrollToTop.jsx";

const TrainingProgram = ({program}) => {
  useScrollToTop();
  return (
    <div className={styles.pageContainer}>
      <Header />
      <main className={styles.trainingProgramContainer}>
        <h1 className={styles.pageHeader}>{program.name}</h1>
        <ProgramImage  programName={program.name} programImage={program.programImage}/>
        <ProgramDescription program={program}/>
        <ProgramOverview program={program}/>
        <ProgramWorkout program={program}/>
      </main>
    </div>
  );
};

export default TrainingProgram;
