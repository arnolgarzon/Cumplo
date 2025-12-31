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
      prevHabits.map(habit =>
        habit.id === id
          ? { ...habit, completed: !habit.completed }
          : habit
      )
    );
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
