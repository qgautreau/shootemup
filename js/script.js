var playFrame = document.getElementById("playframe");
var pigeon = document.createElement("img");
pigeon.src = "./images/pigeon.jpg"
pigeon.id = "pigeon";
playFrame.appendChild(pigeon);

pigeon.style.left = Math.floor((Math.random()*80)+1) + '%';
pigeon.style.top = Math.floor((Math.random()*80)+1) + '%';
