import { useState } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState([]);

  function addHabit(name) {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false
    };

    setHabits(prevHabits => [...prevHabits, newHabit]);
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


  function addHabit(name) {
    const newHabit = {
      id: Date.now(),
      name,
      completed: false,
      streak: 0
    };

    setHabits(prev => [...prev, newHabit]);
  }



  return (
    <div>
      <Header />
      <HabitForm onAddHabit={addHabit} />
      <HabitList
        habits={habits}
        onToggleHabit={toggleHabit}
      />

    </div>
  );
}

export default App;
