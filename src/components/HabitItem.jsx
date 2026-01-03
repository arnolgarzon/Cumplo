function HabitItem({ habit, onToggleHabit, onDeleteHabit }) {
  return (
    <li
      style={{
        opacity: habit.completed ? 0.6 : 1,
        backgroundColor: habit.streak >= 3 ? "#e0ffe5" : "transparent",
        padding: "8px",
        borderRadius: "6px",
        marginBottom: "8px",
        listStyle: "none"
      }}
    >
      {/* Nombre del hábito (clickeable) */}
      <span
        style={{
          textDecoration: habit.completed ? "line-through" : "none",
          fontWeight: "500",
          cursor: "pointer"
        }}
        onClick={() => onToggleHabit(habit.id)}
      >
        {habit.name}
      </span>

      <br />

      {/* Racha visible solo si existe */}
      {habit.streak > 0 && (
        <small>🔥 {habit.streak} días</small>
      )}

      <br />

      {/* Estado de la racha */}
      <small>{getStreakStatus(habit.streak)}</small>

      <br />

      {/* Botón cumplir */}
      <button
        style={{ marginTop: "6px" }}
        onClick={() => onToggleHabit(habit.id)}
      >
        {habit.completed ? "Hecho" : "Cumplir"}
      </button>

      {/* Botón eliminar con confirmación */}
      <button
        onClick={() => {
          if (confirm("¿Eliminar este hábito?")) {
            onDeleteHabit(habit.id);
          }
        }}
        style={{
          marginLeft: "8px",
          backgroundColor: "#ffe5e5"
        }}
      >
        🗑️
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
