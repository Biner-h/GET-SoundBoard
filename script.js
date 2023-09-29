let app = document.getElementById("app");

updateView();
function updateView() {
    app.innerHTML = /*html*/ `
    <div class="container">
        <div id="bubbles" class="square" onclick="playSound('bubbles')">
            <audio class="sound" src="./sounds/bubbles.mp3"></audio>
        </div>
        <div id="moon" class="square" onclick="playSound('moon')">
            <audio class="sound" src="./sounds/moon.mp3"></audio>
        </div>
        <div id="confetti" class="square" onclick="playSound('confetti')">
            <audio class="sound" src="./sounds/confetti.mp3"></audio>
        </div>
        <div id="ufo" class="square" onclick="playSound('ufo')">
            <audio class="sound" src="./sounds/ufo.mp3"></audio>
        </div>
        <div id="glimmer" class="square" onclick="playSound('glimmer')">
            <audio class="sound" src="./sounds/glimmer.mp3"></audio>
        </div>
    </div>
    `;
}

function playSound(selectedSound) {
    document.getElementById(selectedSound).playSound();
}
