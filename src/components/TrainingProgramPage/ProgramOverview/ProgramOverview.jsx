import styles from './programOverview.module.scss';

const ProgramOverview = ({goal,level, wkPerWeek, wkDuration}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.programHeader}>Program Overview</h2>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Level</h3>
        <p className={styles.overviewValue}>{level}</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Goal</h3>
        <p className={styles.overviewValue}>{goal}</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Days Per Week</h3>
        <p className={styles.overviewValue}>{wkPerWeek}</p>
        <hr />
      </div>
      <div className={styles.overviewCard}>
        <h3 className={styles.overviewType}>Time Per Workout</h3>
        <p className={styles.overviewValue}>{wkDuration}</p>
        <hr />
      </div>
    </section>
  );
};

export default ProgramOverview;
