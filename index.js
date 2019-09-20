var btn = document.getElementById('btn');
var input = document.getElementById('input');
var list = document.getElementById('list');
var random = document.getElementById('random');

var colors = [];

btn.addEventListener('click', getColor);
input.addEventListener('keyup', inputChange);
random.addEventListener('click', randomColor);
btn.disabled = true;

function inputChange() {
    if (/^#[0-9A-F]{6}$/i.test(input.value)) {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

function getColor() {
    var result = input.value;
    input.value = "";
    btn.disabled = true;
    colors.push(result);
    updateList();
}

function updateList() {
    var li = document.createElement('li');
    li.innerText = "HEX:" + colors[colors.length - 1];
    li.style.color = colors[colors.length - 1];
    list.appendChild(li);
}

function randomColor() {
    var allowed = "ABCDEF0123456789";
    var def = "#";
    while (def.length < 7) {
        def += allowed.charAt(Math.floor((Math.random() * 16) + 1));
    }
    input.value = def;
    updateList();
}

console.log(randomColor());
