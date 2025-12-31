function HabitItem({ habit, onToggleHabit }) {
  return (
    <li
      style={{
        backgroundColor: habit.streak >= 3 ? "#e0ffe5" : "transparent",
        padding: "8px",
        borderRadius: "6px",
        marginBottom: "8px",
        listStyle: "none"
      }}
    >
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
          fontWeight: "500"
        }}
      >
        {habit.name}
      </span>

      <br />

      {habit.streak > 0 && (
        <small>🔥 {habit.streak} días</small>
      )}

      <br />

      <small>{getStreakStatus(habit.streak)}</small>

      <br />

      <button
        style={{ marginTop: "6px" }}
        onClick={() => onToggleHabit(habit.id)}
      >
        {habit.completed ? "Hecho" : "Cumplir"}
      </button>
    </li>
  );
}

function getStreakStatus(streak) {
  if (streak >= 5) return "🚀 Imparable";
  if (streak >= 3) return "🔥 En racha";
  if (streak >= 1) return "💪 Buen comienzo";
  return "🌱 Empieza hoy";
}

export default HabitItem;
