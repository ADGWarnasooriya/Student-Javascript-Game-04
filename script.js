function start() {
    setInterval(run, 200);
}

var x = 0;

function run() {
    x = x - 512;
    var r = document.getElementById("r");
    r.style.backgroundPositionX = x + "px";
}