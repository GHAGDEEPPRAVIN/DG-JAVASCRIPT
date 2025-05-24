fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
        cardList(data);
    });

function cardList(data) {
    let cards = data.map((el) =>
        cardDiv(el.id, el.image, el.price, el.title, el.description)
    );
    document.getElementById("container").innerHTML = cards.join("");
}

function cardDiv(id, image, price, title, description) {
    return `
        <div>
            <p>${id}</p>
            <img style="height:200px;" src="${image}" alt="">
            <h3>${price}</h3>
            <h3>${title}</h3>
            <p>${description}</p>
        </div>
    `;
}
