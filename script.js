'use strict';

const player0E1= document.querySelector('.player--0');
const player1E1=document.querySelector('.player--1');
const score0E1=document.querySelector('#score--0');
const score1E1=document.getElementById('score--1');
const current0E1=document.getElementById('current--0');
const current1E1=document.getElementById('current--1');

const diceE1=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init=function(){
    scores=[0,0];
    currentScore=0;
    activePlayer=0;
    playing=true;

    score0E1.textContent=0;
    score1E1.textContent=0;
    current0E1.textContent=0;
    current1E1.textContent=0;

    diceE1.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
};
init();
const switchPlayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;
    player0E1.classList.toggle('player--active');
    player1E1.classList.toggle('player--active');
};

btnRoll.addEventListener('click',function(){
    if(playing){
        const dice=Math.trunc(Math.random()*6)+1;

        diceE1.classList.remove('hidden');
        diceE1.src=`dice-${dice}.png`;

        if (dice !==1){
            currentScore+=dice;
            document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        }
        else{
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click',function(){
    if(playing){
        scores[activePlayer]+=currentScore;

        document.getElementById(`score--${activePlayer}`).textContent=
        scores[activePlayer];

        if (scores[activePlayer]>=100){
            playing=false;
            diceE1.classList.add('hidden');

            document
            .querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document
            .querySelector(`.player--${activePlayer}`).classList.add('player--active');
        }
        else{
            switchPlayer();
        }
    }
})
btnNew.addEventListener('click',init);