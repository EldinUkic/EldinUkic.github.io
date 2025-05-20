const btn = document.getElementById("toggle-theme");  // Hol den Button

// Wenn vorher schon Dark Mode aktiviert war, mach ihn wieder an
if (localStorage.getItem("dark-mode") === "true") {
  document.body.classList.add("dark-mode");          // Dark Mode an
  btn.textContent = "☀️ Light Mode";                 // Buttontext ändern
}

// Wenn man auf den Button klickt
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");       // Schalte zwischen Hell/Dunkel

  const istDunkel = document.body.classList.contains("dark-mode");

  // Button-Text ändern
  btn.textContent = istDunkel ? "☀️ Light Mode" : "🌙 Dark Mode";

  // Zustand speichern für später
  localStorage.setItem("dark-mode", istDunkel);
});
