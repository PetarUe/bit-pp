var a = document.querySelector('#player');
var b = document.querySelector('.teren');
var e = b.addEventListener("mousemove", position);
function position(e) {
    setTimeout(100);

    console.log(document.getElementById("player").innerHTML);
    var x = e.clientX;
    var y = e.clientY;
    a.style.top = y + "px";
    a.style.left = x + "px";
    
}

function onOffButton() {
    b.removeEventListener("mousemove", position);
}

