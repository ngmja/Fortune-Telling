let is_playing = true;
let rotate_omikuji = null;

document.getElementById('play_button').addEventListener('click', () => {
    if (is_playing) {
        // スロットを回転させる
        rotate_omikuji = setInterval(function () {
            document.getElementById('omikuji_image').setAttribute('src', getRandomImage());
        }, 100);
        document.getElementById('play_button').innerText = 'STOP'
    } else {
        // スロットを止める
        clearInterval(rotate_omikuji)
        document.getElementById('play_button').innerText = 'START'
    }
    is_playing = !is_playing;
})

// ランダムにおみくじ画像のパスを返す
function getRandomImage() {
    const omikuji_types = ['daikyou', 'kyou', 'suekichi',
        'syoukichi', 'kichi', 'chuukichi', 'daikichi'];
    const omikuji_number = Math.floor(Math.random() * omikuji_types.length);
    return `../images/${omikuji_types[omikuji_number]}.png`;
}