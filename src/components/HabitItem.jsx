function HabitItem({ habit, onToggleHabit }) {
  return (
    <li>
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none"
        }}
      >
        {habit.name}
      </span>
      <button onClick={() => onToggleHabit(habit.id)}>
        {habit.completed ? "Hecho" : "Cumplir"}
      </button>
    </li>
  );
}

export default HabitItem;
