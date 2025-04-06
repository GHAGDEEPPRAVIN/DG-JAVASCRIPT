const slider = document.getElementById('slider');
    const slides = document.querySelectorAll('.slider-images img');
    let index = 0;

    function showSlide(i) {
      if (i < 0) index = slides.length - 1;
      else if (i >= slides.length) index = 0;
      else index = i;
      slider.style.transform = `translateX(${-index * 600}px)`;
    }

    function nextSlide() {
      showSlide(index + 1);
    }

    function prevSlide() {
      showSlide(index - 1);
    }