import styles from "../trainingProgram.module.scss";

const ProgramImage = ({programImage, programName}) => {
  return (
    <div className={styles.programImageContainer}>
      <img
        className={styles.programImage}
        src={programImage}
        alt={`${programName} image`}
      />
    </div>
  );
};

export default ProgramImage;
