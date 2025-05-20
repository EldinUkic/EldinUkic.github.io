// 1. Button mit der ID "toggle-theme" auswählen
const btn = document.getElementById("toggle-theme");

// 2. Prüfen, ob Dark Mode beim letzten Besuch aktiviert war
if (localStorage.getItem("darkmode") === "true") {
  document.body.classList.add("darkmode");
  btn.textContent = "☀️ Light Mode";
}

// 3. Wenn der Button geklickt wird ...
btn.addEventListener("click", () => {
  // ... schalte die Klasse "dark-mode" an oder aus
  document.body.classList.toggle("darkmode");

  // 4. Ist Dark Mode aktiv?
  const isDark = document.body.classList.contains("darkmode");

  // 5. Ändere den Button-Text
  btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";

  // 6. Speicher den Zustand im Browser (bleibt beim nächsten Besuch erhalten)
  localStorage.setItem("darkmode", isDark);
});
