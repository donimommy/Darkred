let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");

noBtn.addEventListener("click", () => {
    yesBtn.classList.add("grow");
});

yesBtn.addEventListener("click", () => {
    document.body.style.background = "#ff1e4d"; /* Brighter Red */
    document.body.innerHTML = "<h1>16.02.2025 ❤️
    </h1>";
});
