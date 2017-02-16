var playFrame = document.getElementById("playframe");

setInterval(function(){
    var pigeon = document.createElement("img");
    pigeon.src = "./images/pigeon2.png"
    pigeon.className = "pigeon";
    playFrame.appendChild(pigeon);
    pigeon.style.left = Math.floor((Math.random()*90)+1) + '%';
    pigeon.style.top = Math.floor((Math.random()*90)+1) + '%';
}, 5000);



setInterval(function(){
    pigeon.style.left = Math.floor((Math.random()*90)+1) + '%';
    pigeon.style.top = Math.floor((Math.random()*90)+1) + '%';
}, 1000);

pigeon.addEventListener("click", function(){
    pigeon.style.display = "none";
});
