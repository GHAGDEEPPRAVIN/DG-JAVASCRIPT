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

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    var appendNumber = 4;
    var prependNumber = 1;
    document
      .querySelector(".prepend-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide([
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
        ]);
      });
    document
      .querySelector(".prepend-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.prependSlide(
          '<div class="swiper-slide">Slide ' + --prependNumber + "</div>"
        );
      });
    document
      .querySelector(".append-slide")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide(
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>"
        );
      });
    document
      .querySelector(".append-2-slides")
      .addEventListener("click", function (e) {
        e.preventDefault();
        swiper.appendSlide([
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
          '<div class="swiper-slide">Slide ' + ++appendNumber + "</div>",
        ]);
      });

// Complete your Ratio set up slider code ends
