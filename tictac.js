let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newgame=document.querySelector("#newgame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const enableBoxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
} 

const resetGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const newGame=()=>{
    turn0=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
}


const showWinner=(winner)=>{
    msg.innerText=`Congratulations, the winner is ${winner} !!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() =>{
    for (let pattern of winPatterns){
        let pos1Val= boxes[pattern[0]].innerText;
        let pos2Val= boxes[pattern[1]].innerText;
        let pos3Val= boxes[pattern[2]].innerText;
        
        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
            } 
            
        }
    }
    return false;
}     



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if (turn0===true){
            console.log("O");
            box.innerText="O";
            turn0=false;
        }else{
            console.log("X");
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && (!isWinner)) {
            gameDraw();
        }
    })
})



newgame.addEventListener("click",newGame);
resetBtn.addEventListener("click",resetGame);

// const gameDraw = () => {
//     msg.innerText = `Game was a Draw.`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }



// const showWinner=(winner)=>{
//     msg.innerText=`Congratulations, the winner is ${winner} !!`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }

// const checkWinner=() =>{
//     for (let pattern of winPatterns){
//         let pos1Val= boxes[pattern[0]].innerText;
//         let pos2Val= boxes[pattern[1]].innerText;
//         let pos3Val= boxes[pattern[2]].innerText;
//         if (pos1Val!="" && pos2Val!="" && pos3Val!=""){
//             if (pos1Val===pos2Val && pos2Val===pos3Val){
//                 console.log("winner",pos1Val);
//                 showWinner(pos1Val);
//                 return true;
//             }
//         } 
//     }
// }

// const disableBoxes=()=>{
//     for (let box of boxes){
//         box.disabled=true;
//     }
// }
// const enableBoxes=()=>{
//     for (let box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }

// const showWinner=(winner)=>{
//     msg.innerText=`Congratulations, the winner is ${winner} !!`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// }

// newgame.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);