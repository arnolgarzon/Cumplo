# 🌱 Habit Tracker App

Aplicación web para crear, cumplir y mantener hábitos diarios, con sistema de rachas inteligentes y almacenamiento local.

Diseñada con enfoque **mobile-first**, visual limpio tipo app y lógica preparada para crecer.

---

## ✨ Características

- ✅ Crear hábitos personalizados
- 🔁 Sistema de rachas diarias automático
- 🔥 Mejor racha histórica por hábito
- 📆 Reinicio visual diario automático
- 💾 Persistencia con localStorage
- 📱 Diseño responsive (mobile-first)
- 🃏 Diseño tipo card premium

---

## 🧠 Lógica de rachas

- Un hábito solo puede cumplirse **una vez por día**
- Al cumplirlo:
  - La racha aumenta en +1
  - Se actualiza la mejor racha
- Al iniciar un nuevo día:
  - El hábito vuelve a estado pendiente
  - La racha se conserva

---

## 🛠️ Tecnologías usadas

- React (Hooks)
- JavaScript ES6+
- CSS3 (mobile-first)
- localStorage

---

## 📂 Estructura del proyecto

src/
├── components/
│ ├── Header.jsx
│ ├── HabitForm.jsx
│ ├── HabitList.jsx
│ └── HabitItem.jsx
├── App.jsx
├── index.css
└── main.jsx


---

## 🚀 Cómo ejecutar el proyecto

```bash
npm install
npm run dev
