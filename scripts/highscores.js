const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];


const general = document.getElementById("general");
const science = document.getElementById("science");
const history = document.getElementById("history");
const sports = document.getElementById("sports");

//get category selected
const category = document.getElementById("category");
const s= category.selectedIndex;
let cat = category.options[s].value;


highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");


