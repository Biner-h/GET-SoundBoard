let app = document.getElementById("app");

updateView();
function updateView() {
    app.innerHTML = /*html*/ `
        <div class="one" onclick="playSound('bubbles')">
            <audio id="bubbles" class="sound" src="./sounds/bubbles.mp3"></audio>
        </div>
        <div class="two" onclick="playSound('moon')">
            <audio id="moon" class="sound" src="./sounds/moon.mp3"></audio>
        </div>
        <div class="three" onclick="playSound('confetti')">
            <audio id="confetti" class="sound" src="./sounds/confetti.mp3"></audio>
        </div>
        <div class="four" onclick="playSound('ufo')">
            <audio id="ufo" class="sound" src="./sounds/ufo.mp3"></audio>
        </div>
        <div class="five" onclick="playSound('glimmer')">
            <audio id="glimmer" class="sound" src="./sounds/glimmer.mp3"></audio>
        </div>
    `;
}

function playSound(soundFileName) {
    var audio = new Audio(soundFileName);
    audio.play();
}
