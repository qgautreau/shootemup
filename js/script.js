var playFrame = document.getElementById("playframe");
var pigeon = document.createElement("img");
pigeon.src = "./images/pigeon2.png"
pigeon.id = "pigeon";
playFrame.appendChild(pigeon);

pigeon.style.left = Math.floor((Math.random()*90)+1) + '%';
pigeon.style.top = Math.floor((Math.random()*90)+1) + '%';


while (true) {
    pigeon.style.left = Math.floor((Math.random()*90)+1) + '%';
    pigeon.style.top = Math.floor((Math.random()*90)+1) + '%';
};

pigeon.addEventListener("click", function(){
    pigeon.style.display = "none";
});
