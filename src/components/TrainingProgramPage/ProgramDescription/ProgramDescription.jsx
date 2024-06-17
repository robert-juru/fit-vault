import styles from './programDescription.module.scss';

const ProgramDescription = ({programDescription}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.programHeader}>Program Description</h2>
      <p>
      {programDescription}
      </p>
    </section>
  );
};

export default ProgramDescription;