function HabitItem({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li
      className={`habit-item 
        ${habit.completed ? "completed" : ""} 
        ${habit.streak >= 3 ? "good-streak" : ""}
      `}
    >
      <div className="habit-title">
        {habit.name}
      </div>

      <div className="habit-meta">
        {habit.streak > 0 ? `🔥 ${habit.streak} días · ${getStreakStatus(habit.streak)}` : "🌱 Empieza hoy"}
      </div>

      <div className="habit-actions">
        <button
          className="primary"
          onClick={() => onToggleHabit(habit.id)}
          disabled={habit.completed}
        >
          {habit.completed ? "Hecho hoy" : "Cumplir"}
        </button>

        <button
          className="danger"
          onClick={() => {
            if (confirm("¿Eliminar este hábito?")) {
              onDeleteHabit(habit.id);
            }
          }}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}

function getStreakStatus(streak) {
  if (streak >= 5) return "Imparable 🚀";
  if (streak >= 3) return "En racha 🔥";
  if (streak >= 1) return "Buen comienzo 💪";
  return "Empieza hoy 🌱";
}

export default HabitItem;
