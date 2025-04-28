const apiKey = "44436820-96350695ebd5519dbb744b090";
const searchBtn = document.getElementById('search-btn');
const searchBar = document.getElementById('search-bar');
const imageGrid = document.getElementById('image-grid');
const loadMoreBtn = document.getElementById('load-more');

let currentPage = 1;
let currentQuery = '';
let currentImages = [];

searchBtn.addEventListener('click', () => {
    currentQuery = searchBar.value.trim();
    if (currentQuery) {
        currentPage = 1; // Reset to first page
        fetchImages(currentQuery);
    }
});

loadMoreBtn.addEventListener('click', () => {
    if (currentQuery) {
        currentPage += 1;
        fetchImages(currentQuery);
    }
});

// Function to fetch images from Pixabay API
async function fetchImages(query) {
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&per_page=12&page=${currentPage}`;
    
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data.hits.length > 0) {
            if (currentPage === 1) {
                imageGrid.innerHTML = ''; // Clear previous results
            }
            
            currentImages = [...currentImages, ...data.hits];
            
            data.hits.forEach(image => {
                const imageCard = document.createElement('div');
                imageCard.classList.add('image-card');
                imageCard.innerHTML = `
                    <img src="${image.webformatURL}" alt="${image.tags}" />
                `;
                
                imageGrid.appendChild(imageCard);
            });
            
            loadMoreBtn.style.display = data.totalHits > currentImages.length ? 'block' : 'none';
        } else {
            alert('No images found!');
        }
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}
