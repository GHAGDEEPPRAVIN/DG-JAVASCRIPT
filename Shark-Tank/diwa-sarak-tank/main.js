
let mainSection = document.getElementById("data-list-wrapper");

// // pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// // Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

// //Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

// //sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

// //Search by title/founder

// let searchBySelect = document.getElementById("search-by-select");
// let searchByInput = document.getElementById("search-by-input");
// let searchByButton = document.getElementById("search-by-button");

// // Problem 1. List of pitches on page load [3}


let pitchDataAll = [];

function fetchapiformserver()
{
    fetch("http://localhost:3000/pitches")
    .then((response)=>response.json())
    .then((data)=>{
        pitchDataAll = data 
        cardList(data)
    })
    .catch((error)=>
        console.log(error)
    )
}
fetchapiformserver();

function cardList(data)
{
    let cards = data.map((el,i)=>
    {
        return card(el.id,el.title,el.price,el.founder,el.category,el.image)
    })

    console.log(cards)

    mainSection.innerHTML = cards.join("")

}

function card(id,title,price,founder,category,image)
{

    let singleCard = `
    
        <div class="card">
            <div class="card-img">
                <img src="${image}" alt="">
            </div>
            <div class="card-body">
                <h4 class="card-title">${title}</h4>
                <p class="card-founder">${founder}</p>
                <p class="card-category">${category}</p>
                <p class="card-price">$${price}</p>
                <button href="#" class="card-link" id=${id}>Edit</button>
                <button class="card-button" id=${id}>Delete</button>
            </div>
        </div>

    `

    return singleCard;

}

// ############################################## Task - 1 ---> Add Pitch ###########################################################

pitchCreateBtn.addEventListener("click",()=>
{
    let pitchData = {
        title : pitchTitleInput.value,
        price : pitchPriceInput.value,
        founder : pitchfounderInput.value,
        category : pitchCategoryInput.value,
        image : pitchImageInput.value,
    }

    fetch("http://localhost:3000/pitches",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(pitchData),    
    })
    .then((res)=>{
        // console.log(res)
    })
    .catch((err)=>{
        // console.log(err)
    })


})

// ############################################## Task - 2 ---> update only Price ###################################################

updatePricePitchPriceButton.addEventListener("click",()=>{
    const id = updatePricePitchId.value;

    let updatePitchData = {
        price : updatePricePitchPrice.value,
    };

    fetch(`http://localhost:3000/pitches/${id}`,{
    method: "PATCH",
    headers: {
        "Content-Type": "application/json",
    },
        body: JSON.stringify(updatePitchData),    
    })
    .then((res)=>{
        // console.log(res)
    })
    .catch((err)=>{
        // console.log(err)
    })
})

// ############################################## Task - 3 ---> Sort Based On Price ##################################################

sortAtoZBtn.addEventListener("click", ()=>{
    pitchDataAll.sort((a,b)=>
    {
        return a.price - b.price
    })

    cardList(pitchDataAll)
})

sortZtoABtn.addEventListener("click", ()=>
{
    pitchDataAll.sort((a,b)=>
    {
        return b.price - a.price
    })

    cardList(pitchDataAll)
})

// ############################################## Task - 4 ---> Filter Based On Category ##############################################

filterFood.addEventListener("click",()=>{
    const filterFoodData = pitchDataAll.filter((el,i)=>
    {
        return el.category=="Food"
    })

    cardList(filterFoodData)

})

filterElectronics.addEventListener("click",()=>{
    const filterElectronicsData = pitchDataAll.filter((el,i)=>
    {
        return el.category=="Electronics"
    })

    cardList(filterElectronicsData)

})

filterPersonalCare.addEventListener("click",()=>{
    const filterPersonalCareData = pitchDataAll.filter((el,i)=>
    {
        return el.category=="Personal Care"
    })

    cardList(filterPersonalCareData)

})

// ############################################## Task - 5 ---> update all fields of Pitch ##############################################

updatePitchBtn.addEventListener("click",()=>
{
    const id =  updatePitchIdInput.value;

    let updatePitchData = {
        title : updatePitchTitleInput.value,
        price : updatePitchPriceInput.value,
        founder : updatePitchfounderInput.value,
        category : updatePitchCategoryInput.value,
        image : updatePitchImageInput.value
    };

    fetch(`http://localhost:3000/pitches/${id}`,{
        method:"PUT",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },

        body: JSON.stringify(updatePitchData),
    }).then((res)=>{
        // console.log(res)
    }).catch((err)=>
    {
        console.log(err)
    })
})

document.addEventListener("click",(e)=>
{
    const id = e.target.id;
    
    if(e.target.classList.contains("card-link"))
    {
       fetch(`http://localhost:3000/pitches/${id}`)
       .then((res)=>res.json())
       .then((data)=>{

        updatePitchTitleInput.value = data.title;
        updatePitchPriceInput.value = data.price;
        updatePitchfounderInput.value = data.founder;
        updatePitchCategoryInput.value = data.category;
        updatePitchImageInput.value = data.image;
        updatePitchIdInput.value = data.id;

       })
       .catch((err)=>{
        console.log(err)
        })
    }
})

// ############################################## Task - 6 ---> DELETE Pitch ##############################################

document.addEventListener("click",(e)=>
{
    const id = e.target.id;
    
    if(e.target.classList.contains("card-button"))
    {
       fetch(`http://localhost:3000/pitches/${id}`,{
        method:"DELETE"
       })
       .then((res)=>res.json())
       .catch((err)=>{
        console.log(err)
        })
    }
})