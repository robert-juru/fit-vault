import styles from './programDescription.module.scss';

const ProgramDescription = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.programHeader}>Program Description</h2>
      <p>
        The Absolute Athlete is for those who favor performance above all.
        Developed by record-holding powerlifter and gymnast Hadyn Wiseman, this
        functional program combines powerlifting, olympic lifting, and
        bodyweight exercises to help athletes develop maximal strength, power,
        speed, agility, balance, and coordination. This program is perfect for
        intermediate-level lifters and athletes. The program runs for 6 weeks,
        with a steady increase in intensity each week and a de-load week at the
        end. There are 3 sessions per week, which allows dual athletes to also
        train for another sport. Full guide below.
      </p>
    </section>
  );
};

export default ProgramDescription;