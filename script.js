let app = document.getElementById("app");
let app1 = document.querySelector(".dapp");
updateView();
function updateView() {
    app.innerHTML = /*html*/ `
    <div class="container">
        <div class="square" onclick="playSound('bubbles.mp3')"></div>
        <div class="square" onclick="playSound('confetti.mp3')"></div>
        <div class="square" onclick="playSound('glimmer.mp3')"></div>
        <div class="square" onclick="playSound('moon.mp3')"></div>
        <div class="square" onclick="playSound('ufo.mp3')"></div>
    </div>
    `;
}

const playSound = (name) => {
    const path = "./audio/" + name;
    app1.innerHTML = `<audio src="${path}" autoplay></audio>`;
};
