const area = document.getElementById("gears");
if(area){
for(let i=0;i<40;i++){
let gear=document.createElement("div");
gear.className="gear";
gear.innerHTML="⚙";
gear.style.left=Math.random()*100+"%";
gear.style.animationDuration =
(5+Math.random()*10)+"s";
gear.style.animationDelay =
Math.random()*10+"s";
gear.style.fontSize =
(20+Math.random()*60)+"px";
area.appendChild(gear);
}
}
