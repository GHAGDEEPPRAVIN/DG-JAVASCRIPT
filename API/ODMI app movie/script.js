const title = document.getElementById("title");
const img = document.getElementById("img");
const name = document.getElementById("name");
const director = document.getElementById("director");
const writer = document.getElementById("writer");
const actors = document.getElementById("actors");
const btn = document.getElementById("btn");
const des = document.getElementById("des");
let movie = title.value;


function callApi()
{
    // let link = "https://omdbapi.com/?t=rrr&apikey=5e2fb6f7";

    fetch("https://omdbapi.com/?t=rrr&apikey=5e2fb6f7").then((response) => {response.json()} 
    ).then((data) => {
        img.src = data.Poster;
        name.innerHTML = data.Title.value;
    });
}

btn.addEventListener("click",callApi);

// callApi();