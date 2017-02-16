var playFrame = document.getElementById("playframe");

setInterval(function(){
    var pigeon = document.createElement("img");
    pigeon.src = "./images/pigeon2.png"
    pigeon.className = "pigeon";
    playFrame.appendChild(pigeon);
    pigeon.style.left = Math.floor((Math.random()*90)+1) + '%';
    pigeon.style.top = Math.floor((Math.random()*90)+1) + '%';
}, 3000);


    setInterval(function(){
        var pigeons = document.getElementsByClassName('pigeon');
        for(var i = 0; i < pigeons.length; i++){
            pigeons[i].style.left = Math.floor((Math.random()*80)+1) + '%';
            pigeons[i].style.right = Math.floor((Math.random()*80)+1) + '%';
            pigeons[i].style.top = Math.floor((Math.random()*80)+1) + '%';
            pigeons[i].style.bottom = Math.floor((Math.random()*80)+1) + '%';
            pigeons[i].addEventListener("click", function(){
                this.style.display = "none";
            });
        }
    }, 1000);
