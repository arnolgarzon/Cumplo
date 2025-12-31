import HabitItem from "./HabitItem";

function HabitList({ habits, onToggleHabit }) {
  return (
    <ul>
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggleHabit={onToggleHabit}
        />
      ))}
    </ul>
  );
}

export default HabitList;
