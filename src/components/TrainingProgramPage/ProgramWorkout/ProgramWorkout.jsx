import WorkoutTable from "./WorkoutTable";

const ProgramWorkout = ({ program }) => {
  console.log(program)
  return (
    <>
      {Object.keys(program).map((dayKey) => (
        <WorkoutTable key={dayKey} program={program[dayKey]}/>
      ))}
    </>
  );
};

export default ProgramWorkout;
