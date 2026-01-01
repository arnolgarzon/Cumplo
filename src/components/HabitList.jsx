import HabitItem from "./HabitItem";

function HabitList({ habits, onToggleHabit, onDeleteHabit }) {
  return (
    <ul>
      {habits.map(habit => (
        <HabitItem
          key={habit.id}
          habit={habit}
          onToggleHabit={onToggleHabit}
          onDeleteHabit={onDeleteHabit}
        />
      ))}
    </ul>
  );
}

export default HabitList;
