

let portals = document.querySelectorAll(".portal");
let ricks = document.querySelectorAll(".rick");
let displayscore = document.querySelector(".score");
let quote = document.querySelector(".quote");
let timeup = false;
let lastportal;
let score = 0;


function MakeRandomTime(min,max){

    return Math.round(Math.random()*(max-min) + min);
}


function GetRandomPortal(portals){
    
    let portalindex = Math.round(Math.random() * portals.length);
    let portal = portals[portalindex];
    if(portal == lastportal){
        GetRandomPortal(portals)
    }
    lastportal = portal;
    return portal;
}

function popup(){
      
    let timeset = MakeRandomTime(1000,1000);
    let portal = GetRandomPortal(portals);
   portal.classList.add('up');

setTimeout(()=> {
    portal.classList.remove('up');
    if(!timeup){
        popup();
    }

},timeset)

}


function startGame(){
    timeup = false;
    displayscore.textContent = 0;
    score = 0;
    popup();
 setTimeout(()=> timeup = true, 45000)
 
}

function wack(e){
    if(!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    displayscore.textContent = score;
  
      
}



ricks.forEach(rick => rick.addEventListener('click', wack));



