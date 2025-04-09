// Get gallery container and arrow buttons
const galleryContainer = document.querySelector(".gallery-container");
const prevArrow = document.getElementById("prev-arrow");
const nextArrow = document.getElementById("next-arrow");

// Scroll the gallery container left or right
prevArrow.addEventListener("click", function() {
    galleryContainer.scrollBy({
        left: -300, // Scroll left by 300px
        behavior: "smooth"
    });
});

nextArrow.addEventListener("click", function() {
    galleryContainer.scrollBy({
        left: 300, // Scroll right by 300px
        behavior: "smooth"
    });
});
