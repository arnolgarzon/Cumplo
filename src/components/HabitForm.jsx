import { useState } from "react";

function HabitForm({ onAddHabit }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;

    onAddHabit(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nuevo hábito"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default HabitForm;
