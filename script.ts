function showLove(): void {
    const loveMessage = document.getElementById("loveMessage");
    const noButton = document.getElementById("noBtn");
    const poemContainer = document.getElementById("poemContainer");

    if (loveMessage && noButton && poemContainer) {
        noButton.style.display = "none"; 
        loveMessage.textContent = "I Knew It😍, I Love You too ချစ်တုံးချေ😙💞";
        loveMessage.style.display = "block"; 

        setTimeout(() => {
            showPoem();
        }, 1000);
    }
}

function showPoem(): void {
    const poemContainer = document.getElementById("poemContainer");

    if (poemContainer) {
        poemContainer.style.display = "block";

        const poemLines = [
            "You are my sunshine, my only light 🌞",
            "With you, every day feels so right 💖",
            "Your smile makes my world so bright 😍",
            "Forever with you is my heart’s delight 💞"
        ];

        poemLines.forEach((line, index) => {
            setTimeout(() => {
                const newLine = document.createElement("p");
                newLine.className = "line";
                newLine.textContent = line;
                poemContainer.appendChild(newLine);

                setTimeout(() => {
                    newLine.style.opacity = "1";
                }, 100);
            }, index * 2000); 
        });
    }
}

function moveButton(): void {
    const button = document.getElementById("noBtn");
    if (button) {
        const maxX = window.innerWidth - button.offsetWidth;
        const maxY = window.innerHeight - button.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        button.style.position = "absolute";
        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noBtn");
    if (noButton) {
        noButton.addEventListener("mouseenter", moveButton);
    }
});
