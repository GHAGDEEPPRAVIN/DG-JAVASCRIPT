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
    const link = "https://omdbapi.com/?t=rrr&apikey=5e2fb6f7";

    fetch(link).then((response) => 
        response.json()
    ).then((data) => 
        img.src = data.Poster;
    );
}

// function dogImg()
// {
//     fetch("https://dog.ceo/api/breeds/image/random").then((response) => 
//         response.json()
//     ).then((data) => 
//         img.src = data.message
//     );
// }

btn.addEventListener("click",callApi);

// callApi();