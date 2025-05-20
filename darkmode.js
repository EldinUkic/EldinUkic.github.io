const btn = document.getElementById("toggle-theme");

// Systemeinstellung berücksichtigen
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const storedPreference = localStorage.getItem("dark-mode");
let isDark = storedPreference !== null ? JSON.parse(storedPreference) : systemPrefersDark;

function updateTheme() {
    document.body.classList.toggle("dark-mode", isDark);
    btn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("dark-mode", JSON.stringify(isDark));
}

// Initialisierung
updateTheme();

btn.addEventListener("click", () => {
    isDark = !isDark;
    updateTheme();
});

// Auf Systemänderungen reagieren
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem("dark-mode")) {
        isDark = e.matches;
        updateTheme();
    }
});
