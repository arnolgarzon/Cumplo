import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  // 1️⃣ Estado con carga inicial desde localStorage
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // 2️⃣ Guardar automáticamente cuando cambien
  useEffect(() => {
  const today = new Date().toDateString();

  setHabits(prev =>
    prev.map(habit =>
      habit.lastCompleted !== today
        ? { ...habit, completed: false }
        : habit
    )
  );
}, []);


  // 3️⃣ Métricas (SIEMPRE dentro del componente)
  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;

  // 4️⃣ Agregar hábito
  function addHabit(name) {
    if (!name.trim()) return;

    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      streak: 0,
      lastCompleted: null
    };


    setHabits(prev => [...prev, newHabit]);
  }

  // 5️⃣ Marcar / desmarcar hábito
  function toggleHabit(id) {
    const today = new Date().toDateString();

    setHabits(prevHabits =>
      prevHabits.map(habit => {
        if (habit.id !== id) return habit;

        // 🚫 Ya cumplido hoy
        if (habit.lastCompleted === today) {
          return habit;
        }

        const completed = true;
        const streak = habit.lastCompleted
          ? habit.streak + 1
          : habit.streak + 1;

        return {
          ...habit,
          completed,
          streak,
          lastCompleted: today
        };
      })
    );
  }


  // 6️⃣ Eliminar hábito
  function deleteHabit(id) {
    setHabits(prevHabits =>
      prevHabits.filter(habit => habit.id !== id)
    );
  }

  return (
    <div>
      <Header />

      <p>
        Completados hoy: {completedCount} / {totalCount}
      </p>

      <HabitForm onAddHabit={addHabit} />

      {habits.length === 0 ? (
        <p>🌱 Empieza agregando tu primer hábito</p>
      ) : (
        <HabitList
          habits={habits}
          onToggleHabit={toggleHabit}
          onDeleteHabit={deleteHabit}
        />
      )}
    </div>
  );
}

export default App;
