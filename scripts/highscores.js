const highScoresList = document.getElementById("highScoresList");

//get category selected
const category = document.getElementById("category");

let selected = "";
let cat;

const general = document.getElementById("general");
const science = document.getElementById("science");
const history = document.getElementById("history");
const sports = document.getElementById("sports");

category.addEventListener("change", () => {
  selected = category.value;
  if (selected === "ge") {
    cat = "9";
  }else if (selected === "sc") {
    cat = "18";
  }else if (selected === "hi") {
    cat = "23";
  }else if (selected === "sp") {
    cat = "21";
  }

const highScores = JSON.parse(localStorage.getItem(cat)) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");


});



