const input = document.getElementById("input");
const search = document.getElementById("search");

const link = "https://api.openweathermap.org/data/2.5/weather?q=surat&appid=0695bd64a5348a29a0967425eb751c9e";

async function callApi(city)
{
    const link = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=0695bd64a5348a29a0967425eb751c9e";   
    console.log(link);  
    
    fetch(link)
    .then((response)=>{
        response.json()
    })
    .then((data)=>{
        
    })
}

search.addEventListener('click',()=>
{
    const value = input.value;
    callApi(value);
});