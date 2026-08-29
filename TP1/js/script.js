document.addEventListener("DOMContentLoaded", () => {
    setupTheme();
    setupRandomProfile();
    setupProfileInteraction();
});

function setupTheme() {
    const buttons = document.querySelectorAll(".theme-toggle");
    const savedTheme = localStorage.getItem("nexus-theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
    }

    updateThemeButtons();

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            document.body.classList.toggle("light-theme");

            const theme = document.body.classList.contains("light-theme")
                ? "light"
                : "dark";

            localStorage.setItem("nexus-theme", theme);
            updateThemeButtons();
        });
    });
}

function updateThemeButtons() {
    const buttons = document.querySelectorAll(".theme-toggle");

    buttons.forEach((button) => {
        const isLight = document.body.classList.contains("light-theme");
        const icon = button.querySelector(".theme-icon");

        if (icon) {
            icon.textContent = isLight ? "☾" : "☀";
        }

        button.setAttribute(
            "aria-label",
            isLight ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
        );
    });
}

function setupRandomProfile() {
    const button = document.querySelector("#random-profile");

    if (!button) {
        return;
    }

    const profiles = [
        "integrante1.html",
        "integrante2.html",
        "integrante3.html",
        "integrante4.html",
        "integrante5.html"
    ];

    button.addEventListener("click", () => {
        const selected = profiles[Math.floor(Math.random() * profiles.length)];
        window.location.href = selected;
    });
}

function setupProfileInteraction() {
    const button = document.querySelector(".skill-button");
    const result = document.querySelector("#skill-result");

    if (!button || !result) {
        return;
    }

    const skills = [
        "HTML — estructura semántica",
        "CSS — diseño responsive",
        "JavaScript — interactividad",
        "Trabajo en equipo — colaboración"
    ];

    button.addEventListener("click", () => {
        const selected = skills[Math.floor(Math.random() * skills.length)];
        result.textContent = `Habilidad destacada: ${selected}`;
    });
}
