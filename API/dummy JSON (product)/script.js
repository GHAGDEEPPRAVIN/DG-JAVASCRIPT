const container = document.getElementById("product-container");

// Replace this with your actual API endpoint
const API_URL = "https://example.com/api/product/1";

fetch(API_URL)
  .then((res) => res.json())
  .then((product) => {
    const html = `
      <div class="product-image">
        <img src="${product.images[0]}" alt="${product.title}" />
      </div>
      <div class="product-details">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><span class="price">₹${product.price}</span> <span class="discount">(${product.discountPercentage}% OFF)</span></p>
        <p><strong>Rating:</strong> ⭐ ${product.rating} / 5</p>
        <p class="stock"><strong>Status:</strong> ${product.availabilityStatus}</p>
        <p><strong>Stock left:</strong> ${product.stock}</p>
        <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
        <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
        <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
        <p><strong>Minimum Order Qty:</strong> ${product.minimumOrderQuantity}</p>
        <p><strong>Dimensions (W×H×D):</strong> ${product.dimensions.width} × ${product.dimensions.height} × ${product.dimensions.depth} cm</p>
        <p><strong>SKU:</strong> ${product.sku}</p>
        <p><strong>Barcode:</strong> ${product.meta.barcode}</p>
        <p><strong>QR Code:</strong> <br /><img src="${product.meta.qrCode}" width="100"/></p>

        <div class="reviews">
          <h3>Reviews:</h3>
          ${product.reviews
            .map(
              (review) =>
                `<div class="review">
                  <strong>${review.reviewerName}:</strong> ⭐ ${review.rating}<br />
                  "${review.comment}"
                </div>`
            )
            .join("")}
        </div>

        <button>Add to Cart</button>
      </div>
    `;
    container.innerHTML = html;
  })
  .catch((error) => {
    console.error("Failed to fetch product:", error);
    container.innerHTML = "<p>Failed to load product data.</p>";
  });
