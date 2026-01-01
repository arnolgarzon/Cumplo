import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  // 1️⃣ Cargar desde localStorage al iniciar
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // 2️⃣ Guardar automáticamente cuando cambien
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit(name) {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      streak: 0
    };

    setHabits(prev => [...prev, newHabit]);
  }

  function toggleHabit(id) {
    setHabits(prevHabits =>
      prevHabits.map(habit => {
        if (habit.id !== id) return habit;

        const completed = !habit.completed;
        const streak = completed
          ? habit.streak + 1
          : Math.max(0, habit.streak - 1);

        return { ...habit, completed, streak };
      })
    );
  }

  function deleteHabit(id) {
  setHabits(prevHabits =>
    prevHabits.filter(habit => habit.id !== id)
  );
}


  return (
    <div>
      <Header />
      <HabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={toggleHabit}
        onDeleteHabit={deleteHabit}
      />
    </div>
  );
}

export default App;
