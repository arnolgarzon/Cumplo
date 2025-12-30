import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import './App.css'

function App() {
  const habits = [
    { id: 1, name: "Beber agua" },
    { id: 2, name: "Leer 20 minutos" }
  ];

  return (
    <div>
      <Header />
      <HabitForm />
      <HabitList habits={habits} />
    </div>
  );
}

export default App;
