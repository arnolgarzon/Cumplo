import { useState, useEffect } from "react";
import Header from "./components/Header";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

/* =========================
   🧠 HELPERS (FUTURO HOOK)
========================= */

// Fecha normalizada (clave para rachas)
function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

// Cargar hábitos seguros desde localStorage
function loadHabits() {
  try {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

function App() {
  /* =========================
     📦 ESTADO PRINCIPAL
  ========================= */
  const [habits, setHabits] = useState(loadHabits);
  const [lastOpenDate, setLastOpenDate] = useState(
    localStorage.getItem("lastOpenDate")
  );

  const today = getTodayKey();

  /* =========================
     🔄 RESET DIARIO AUTOMÁTICO
  ========================= */
  useEffect(() => {
    if (lastOpenDate !== today) {
      setHabits(prev =>
        prev.map(habit => ({
          ...habit,
          completed: false
        }))
      );

      setLastOpenDate(today);
      localStorage.setItem("lastOpenDate", today);
    }
  }, [lastOpenDate, today]);

  /* =========================
     💾 PERSISTENCIA
  ========================= */
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  /* =========================
     📊 MÉTRICAS (ESCALABLES)
  ========================= */
  const completedCount = habits.filter(h => h.completed).length;
  const totalCount = habits.length;
  const completionRate =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  /* =========================
     ➕ AGREGAR HÁBITO
  ========================= */
  function addHabit(name) {
    if (!name.trim()) return;

    const newHabit = {
      id: crypto.randomUUID(), // 🔐 más seguro que Date.now
      name: name.trim(),
      completed: false,
      streak: 0,
      bestStreak: 0,
      lastCompleted: null,
      createdAt: today
    };

    setHabits(prev => [...prev, newHabit]);
  }

  /* =========================
     ✅ CUMPLIR HÁBITO
  ========================= */
  function toggleHabit(id) {
    setHabits(prev =>
      prev.map(habit => {
        if (habit.id !== id) return habit;

        // 🚫 ya cumplido hoy
        if (habit.lastCompleted === today) return habit;

        const newStreak = habit.streak + 1;

        return {
          ...habit,
          completed: true,
          streak: newStreak,
          bestStreak: Math.max(habit.bestStreak, newStreak),
          lastCompleted: today
        };
      })
    );
  }

  /* =========================
     🗑️ ELIMINAR HÁBITO
  ========================= */
  function deleteHabit(id) {
    setHabits(prev => prev.filter(h => h.id !== id));
  }

  /* =========================
     🧩 UI
  ========================= */
  return (
    <div className="app">
      <Header />

      <p className="stats">
        Completados hoy: {completedCount} / {totalCount} · {completionRate}%
      </p>

      <HabitForm onAddHabit={addHabit} />

      {habits.length === 0 ? (
        <p className="empty">🌱 Empieza agregando tu primer hábito</p>
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
