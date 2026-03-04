let gameseq =[];
let  userseq=[];

let btns=["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2= document.querySelector("h2");


document.addEventListener('keypress', function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }

    
});

 function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250);

 }

 function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout( function(){
        btn.classList.remove("userFlash");
    },250);

 }

function levelUp(){
    userseq=[];
    level++; 
    h2.innerText = `level ${level}`;

    let randInd = Math.floor(Math.random()*4);
    let randColor = btns[randInd];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    // console.log(randBtn);
    // console.log(randInd);
    gameseq.push(randColor);
    console.log(gameseq);

    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level :", level);
    // let idx = level-1;
    if(userseq[idx]===gameseq[idx]){
         if(userseq.length == gameseq.length){
           setTimeout(levelUp,1000);
         }
    } else {
        h2.innerHTML = `game over! your score was ${level} press any key again.`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }

    
}

function btnPress(){
//    console.log(this);
   let btn = this;
   userFlash(btn); 

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userseq.push(userColor);

   checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq =[];
    userseq=[];
    level =0;
}