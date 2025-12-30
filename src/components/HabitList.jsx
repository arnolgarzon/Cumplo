import HabitItem from "./HabitItem";

function HabitList({ habits }) {
  return (
    <ul>
      {habits.map(habit => (
        <HabitItem key={habit.id} name={habit.name} />
      ))}
    </ul>
  );
}

export default HabitList;
