
//set category selected


const category = document.querySelectorAll(".list");
const cat_list = Array.from(category);
let sel_cat = 0;

const general = document.getElementById("general");
const science = document.getElementById("science");
const history = document.getElementById("history");
const sports = document.getElementById("sports");
for( list of cat_list){
    list.addEventListener("click",e =>{
        let selected = e.target;
        let sel_cat = selected.dataset["number"];
        localStorage.setItem("cat",sel_cat);
        return window.location.assign("game.html");
    });
}
