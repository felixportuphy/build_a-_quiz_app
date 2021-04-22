const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const cat = localStorage.getItem("cat");
let general = "9";
let science = "18";
let history = "23";
let sports = "21";


const genHighScores = JSON.parse(localStorage.getItem(general)) || [];
const sciHighScores = JSON.parse(localStorage.getItem(science)) || [];
const hisHighScores = JSON.parse(localStorage.getItem(history)) || [];
const spoHighScores = JSON.parse(localStorage.getItem(sports)) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    if(cat === "9"){
        genHighScores.push(score);
        genHighScores.sort((a, b) => b.score - a.score);
        genHighScores.splice(5);
        localStorage.setItem(cat, JSON.stringify(genHighScores));
    }else if(cat==="18"){
        sciHighScores.push(score);
        sciHighScores.sort((a, b) => b.score - a.score);
        sciHighScores.splice(5);
        localStorage.setItem(cat, JSON.stringify(sciHighScores));
    }else if(cat==="23"){
        hisHighScores.push(score);
        hisHighScores.sort((a, b) => b.score - a.score);
        hisHighScores.splice(5);
        localStorage.setItem(cat, JSON.stringify(hisHighScores));
    }else if(cat==="21"){
        spoHighScores.push(score);
        spoHighScores.sort((a, b) => b.score - a.score);
        spoHighScores.splice(5);
        localStorage.setItem(cat, JSON.stringify(spoHighScores));
    // }else{
    // highScores.push(score);
    // highScores.sort((a, b) => b.score - a.score);
    // highScores.splice(5);

    // localStorage.setItem('highScores', JSON.stringify(highScores));
     }
    window.location.assign('/');
};
