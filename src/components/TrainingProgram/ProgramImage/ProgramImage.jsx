import styles from "../trainingProgram.module.scss";

const ProgramImage = () => {
  return (
    <div className={styles.programImageContainer}>
      <img
        className={styles.programImage}
        src="public\program-image-placeholder.webp"
        alt="program image placeholder"
      />
    </div>
  );
};

export default ProgramImage;
