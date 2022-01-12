function start() {
    setInterval(run, 200);
}

var x = 0;

function run() {
    x = x - 512;
    var r = document.getElementById("c");
    r.style.backgroundPositionX = x + "px";
}