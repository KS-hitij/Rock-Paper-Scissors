const rock=document.querySelector(".rock");
const paper=document.querySelector(".paper");
const scissor=document.querySelector(".scissor");
let userScore=0;
let compScore=0;
function check(userMove,compMove)
{
    if(userMove===compMove)
    {
        let message=document.querySelector(".message");
        message.innerHTML=`Draw.<br/> You:${userMove}<br/> Comp:${compMove}`;
        message.style.display="flex";
    }
    else if(userMove==="rock" && compMove==="scissor" ||
        userMove==="paper" && compMove==="rock" ||
        userMove==="scissor" && compMove==="paper"
    )
    {
        let message=document.querySelector(".message");
        message.innerHTML=`You Win.<br/>You:${userMove} <br/>Comp:${compMove}`;
        message.style.display="flex";
        let score=document.querySelector(".userScore");
        userScore++;
        score.innerHTML=`${userScore}`;
    }
    else
    {
        let message=document.querySelector(".message");
        message.innerHTML=`You Lose.<br/>You:${userMove}<br/> Comp:${compMove}`;
        message.style.display="flex";
        let score=document.querySelector(".compScore");
        compScore++;
        score.innerHTML=`${compScore}`;
    }
}
function calculateMove(e)
{
    let userMove=e.target.classList.value;
    let compMove=Math.floor(Math.random()*3)+1;
    if(compMove==1)
        compMove="rock";
    else if(compMove==2)
        compMove="paper";
    else
        compMove="scissor";
    check(userMove,compMove);
}
rock.addEventListener("click",calculateMove);
paper.addEventListener("click",calculateMove);
scissor.addEventListener("click",calculateMove);