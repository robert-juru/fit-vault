import styles from './programOverview.module.scss';

const ProgramOverview = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.programHeader}>Program Overview</h2>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Level</h3>
        <p className={styles.overviewValue}>Intermediate</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Goal</h3>
        <p className={styles.overviewValue}>Powerbuilding</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Days Per Week</h3>
        <p className={styles.overviewValue}>3 days</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Time Per Workout</h3>
        <p className={styles.overviewValue}>90 minutes</p>
        <hr />
      </div>
    </section>
  );
};

export default ProgramOverview;
