// 1. Den Button holen
const btn = document.getElementById("toggle-theme");

// 2. Zustand aus localStorage wiederherstellen
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");
  btn.textContent = "☀️ Light Mode";
}

// 3. Klick-Listener setzen
btn.addEventListener("click", () => {
  // Dark-Mode-Klasse umschalten
  document.body.classList.toggle("dark-mode");

  // Prüfen, ob Dark Mode aktiv ist
  const isDark = document.body.classList.contains("dark-mode");

  // Button-Text anpassen
  btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  // Zustand speichern
  localStorage.setItem("dark-mode", isDark);
});
