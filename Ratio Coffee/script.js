// makers-are-used-and-loved-slider code starts from here

const sliderImage = document.getElementById("slider-image");
const sliderDescription = document.getElementById("slider-description");
const sliderTitle = document.getElementById("slider-title");
const sliderSubTitle = document.getElementById("slider-sub-title");
const sliderReadMoreBtn = document.getElementById("slider-readmore-btn");
const sliderNameChanger = document.getElementById("slider-name-changer");

const leftBtn = document.getElementById("slider-left-btn");
const rightBtn = document.getElementById("slider-right-btn");

let images_for_slider_home_page = [
  {
    name: "Coffee Purists",
    image: "https://ratiocoffee.com/cdn/shop/files/RATIO-Proud-Mary-Nolan-Hirte-09_1512x.jpg?v=1635799124",
    description: "It really is absolutely worth pursuing excellence with coffee, because it’s so rewarding when you do it right.",
    "para-title": "- Nolan Hirte",
    "para-des": "Proud Mary Coffee",
    readMoreBtn: "Read More"
  },
  {
    name: "Cafe Owners",
    image: "https://ratiocoffee.com/cdn/shop/files/Katie-Prinsen-Testimonial_1512x.jpg?v=1652467063",
    description: "We brew coffee every morning…now that we have the Ratio at home we’ve been brewing with that and I love it.",
    "para-title": "- Katie Prinsen",
    "para-des": "Prince Coffee",
    readMoreBtn: "Read More"
  },
  {
    name: "Coffee Enthusiasts",
    image: "https://ratiocoffee.com/cdn/shop/files/Thomas-Ratio-Testimonial_1512x.jpg?v=1652466888",
    description: "We love [our Ratio] and get so many compliments on it, first on aesthetic and next on flavor once I offer to make them coffee.",
    "para-title": "- Thomas Berolzheimer",
    "para-des": "Entrepreneur",
    readMoreBtn: "Read More"
  },
  {
    name: "Minimalist Travelers",
    image: "https://ratiocoffee.com/cdn/shop/files/video_still_1512x.jpg?v=1645480433",
    description: "Delicious, expressive coffee…very pretty looks on the counter top, and such a nicer experience. It feels very considered.",
    "para-title": "- Chase Reeves",
    "para-des": "Digital Creator",
    readMoreBtn: "Watch the Video"
  },
  {
    name: "Surf Photographers",
    image: "https://ratiocoffee.com/cdn/shop/files/Jon-Way-Surfer-Testimonial_1512x.jpg?v=1652390452",
    description: "Beyond brewing a delicious cup of coffee, the Ratio is the culmination of a lot my values around simplicity and attention to detail.",
    "para-title": "- Jon Way",
    "para-des": "Photographer",
    readMoreBtn: "Read More"
  }
];

let count = 0;
let interval;

function updateSliderContent(index) {
  let data = images_for_slider_home_page[index];
  sliderImage.src = data.image;
  sliderDescription.textContent = `"${data.description}"`;
  sliderTitle.textContent = data["para-title"];
  sliderSubTitle.textContent = data["para-des"];
  sliderReadMoreBtn.textContent = data.readMoreBtn;
  sliderNameChanger.textContent = data.name;
}

function startAutoSlide() {
  interval = setInterval(() => {
    count = (count + 1) % images_for_slider_home_page.length;
    updateSliderContent(count);
  }, 11000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

function addSliderImage() {
  updateSliderContent(count);
  startAutoSlide();
}

leftBtn.addEventListener("click", () => {
  stopAutoSlide();
  count = (count - 1 + images_for_slider_home_page.length) % images_for_slider_home_page.length;
  updateSliderContent(count);
  startAutoSlide();
});

rightBtn.addEventListener("click", () => {
  stopAutoSlide();
  count = (count + 1) % images_for_slider_home_page.length;
  updateSliderContent(count);
  startAutoSlide();
});

addSliderImage();


// makers-are-used-and-loved-slider code ends

// Complete your Ratio set up slider code starts

// Complete your Ratio set up slider code ends


// Meet the Ratio line-up product 1 ends

const home_product_append_div = document.getElementById("home_product_append_div");

function fetchHomePageApi() {
  fetch("http://localhost:3000/home-page_products")
    .then((res) => res.json())
    .then((data) => {
      fourProductData(data);
    })
    .catch((err) => console.log(err));
}

fetchHomePageApi();

function fourProductData(data) {
  let homePageProductArray = data.map((el) => {
    // Make sure el.image has at least 2 images
    return singleProduct(el.image[0], el.image[1], el.sub_title, el.title, el.btnn);
  });

  home_product_append_div.innerHTML = homePageProductArray.join("");
}

function singleProduct(image1, image2, sub_title, title, btnn) {
  return `
    <div class="home_page_product">
      <div class="product-images">
        <div class="show-product-images1">
          <img class="default-image" src="${image1}" alt="">
          <img class="hover-image" src="${image2}" alt="">
        </div>
      </div>
      <div class="product-description">
        <span>${sub_title}</span>
        <h2>${title}</h2>
        <button class="hover-btn">${btnn}</button>
      </div>
    </div>
  `;
}

// Handle hover on both image area and button
document.addEventListener("mouseover", function (e) {
  const container = e.target.closest(".home_page_product");
  if (container && (e.target.classList.contains("hover-btn") || e.target.closest(".product-images"))) {
    const defaultImg = container.querySelector(".default-image");
    const hoverImg = container.querySelector(".hover-image");
    if (defaultImg && hoverImg) {
      defaultImg.style.opacity = "0";
      hoverImg.style.opacity = "1";
    }
  }
});

document.addEventListener("mouseout", function (e) {
  const container = e.target.closest(".home_page_product");
  if (container && (e.target.classList.contains("hover-btn") || e.target.closest(".product-images"))) {
    const defaultImg = container.querySelector(".default-image");
    const hoverImg = container.querySelector(".hover-image");
    if (defaultImg && hoverImg) {
      defaultImg.style.opacity = "1";
      hoverImg.style.opacity = "0";
    }
  }
});







// Meet the Ratio line-up product 1 endss