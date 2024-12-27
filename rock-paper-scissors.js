let score = JSON.parse(localStorage.getItem('score'))||{
    win: 0,
    loss: 0,
    tie: 0
}
updateScoreElement();
function playGame(pickMove){
    const computerMove = pickComputerMove();
    let result = '';
if(pickMove==='rock'){
        if(computerMove === 'rock'){
            result = 'Tie.'
        }else if(computerMove === 'paper'){
            result = 'You lose'
        }else if(computerMove === 'scissors'){
            result = 'You win'
        } 

}else if(pickMove ==='paper'){
        if(computerMove === 'rock'){
            result = 'You win'
        }else if(computerMove === 'paper'){
            result = 'Tie.'
        }else if(computerMove === 'scissors'){
            result = 'You lose'
        } 

}else if(pickMove ==='scissors'){
        if(computerMove === 'rock'){
            result = 'You lose'
        }else if(computerMove === 'paper'){
            result = 'You win'
        }else if(computerMove === 'scissors'){
            result = 'Tie.'
        }
} 

    if(result==='You win'){
        score.win +=1;
    }else if(result==='You lose'){
        score.loss +=1;
    }else if(result==='Tie.'){
        score.tie +=1;
    }
    localStorage.getItem('score',JSON.stringify(score));
    updateScoreElement();
    document.querySelector('.js-result')
    .innerHTML=result;
    document.querySelector('.js-moves').
    innerHTML= `You
    <image src="image/${pickMove}-emoji.png" class="move-icon"></image>
    <image src="image/${computerMove}-emoji.png" class="move-icon"></image>
    Computer `;

        }
function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove ='';
    if(randomNumber>=0 && randomNumber< 1/3){
        computerMove ='rock';
     }else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove ='paper';
    } else if(randomNumber>=2/3 && randomNumber<1){
        computerMove ='scissors';
    }
    return computerMove;
}
function updateScoreElement(){
    document.querySelector('.js-score').
    innerHTML= `Wins ${score.win}, Losses ${score.loss}, Ties ${score.tie}`;
}