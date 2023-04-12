let b = document.getElementById('n1');
let b2 = document.getElementById('n2');
let b3 = document.getElementById('n3');
let b4 = document.getElementById('n4');
let b5 = document.getElementById('n5');
let b6 = document.getElementById('n6');
let b7 = document.getElementById('n7');
let b8 = document.getElementById('n8');
let b9 = document.getElementById('n9');
let lightson = document.getElementById('switch');
let lightsoff = document.getElementById('switchoff');
let circuit;
let melodybeat;


function playdrum() {
    melodybeat = new Audio('./Audio/beat.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}

b.addEventListener("click", playdrum);

function playbeat() {
     melodybeat = new Audio('./Audio/beat2.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b2.addEventListener("click", playbeat);

function playbeat1() {
     melodybeat = new Audio('./Audio/beat3.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b3.addEventListener("click", playbeat1);

function playbeat2() {
     melodybeat = new Audio('./Audio/beat4.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b4.addEventListener("click", playbeat2);

function playbeat3() {
     melodybeat = new Audio('./Audio/beat5.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b5.addEventListener("click", playbeat3);

function playbeat4() {
     melodybeat = new Audio('./Audio/beat6.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b6.addEventListener("click", playbeat4);

function playbeat5() {
     melodybeat = new Audio('./Audio/beat7.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b7.addEventListener("click", playbeat5);

function playbeat6() {
     melodybeat = new Audio('./Audio/beat8.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b8.addEventListener("click", playbeat6);

function playbeat7() {
     melodybeat = new Audio('./Audio/beat9.mp3');
    melodybeat.loop = true;
    melodybeat.play();
}
b9.addEventListener("click", playbeat7);



function lights(){
    let bg = document.querySelector('#cont');
    let colors = ["red","green","blue"];
    let bg_colors = (Math.floor(Math.random() * colors.length));
    bg.style.backgroundColor = colors[bg_colors];
}
function lights() {
    let bg = document.querySelector('#main_container');
    let colors = ["rgba(255, 0, 0, 0.3)", "rgba(0, 255, 0, 0.3)", "rgba(0, 0, 255, 0.3)","rgba(156, 87, 0, 0.3)", "rgba(0, 255, 154, 0.3)"];
    let bg_colors = (Math.floor(Math.random() * colors.length));
    console.log(bg_colors);
    bg.style.backgroundColor = colors[bg_colors];
  }
  
lightson.addEventListener('click', function(){
    setTimeout(start, 1000);
});

function start() {
    circuit = setInterval(lights,800);
}

lightsoff.addEventListener('click', function(){
    clearInterval(circuit);
    setTimeout(clearBG, 800);
});

function clearBG() {
    let bg = document.querySelector('#main_container');
    colors = ["rgba(0, 0, 0, 0.3)"];
    bg.style.backgroundColor = colors[0];
}

function stopAudio(){
    melodybeat.pause();
}




