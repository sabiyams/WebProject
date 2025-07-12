// Search Functionality
const searchIcon = document.getElementById("search-icon");
const searchInput = document.querySelector(".search-input");

searchIcon.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});

// Close search when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-box') && searchInput.classList.contains('active')) {
        searchInput.classList.remove('active');
    }
});

// Search functionality
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            alert(`Searching for: ${searchTerm}`);
            // In real implementation, filter food items here
            searchInput.value = '';
            searchInput.classList.remove('active');
        }
    }
});
// Food Image Rotation and Switching
const food = document.getElementById("food");
const foodItems = [
    document.getElementById("food1"),
    document.getElementById("food2"),
    document.getElementById("food3"),
    document.getElementById("food4"),
    document.getElementById("food5"),
    document.getElementById("food6"),
];

const foodImages = [
    'menu2.jpg',
    'menu3.jpeg',
    'menu4.jpeg',
    'menu5.jpeg',
    'menu7.jpeg',
    'menu9.jpg',
    'menu8.jpeg',
];

// Set initial thumbnails
foodItems.forEach((item, index) => {
    item.style.backgroundImage = `url(${foodImages[index + 1]})`;
});

foodItems.forEach((item, index) => {
    item.addEventListener('click', () => {
       // Start rotation
        food.style.transform = 'rotate(180deg)';
        food.style.transition = 'transform 2.5S ease';
        
        // Trigger reflow to ensure animation starts
        void food.offsetWidth;
        
        // Rotate 360 degrees
        food.style.transform = 'rotate(180deg)';
        
        // Change image at 180 degrees (mid-rotation)
        setTimeout(() => {
            food.style.backgroundImage = `url(${foodImages[index + 1]})`;
        }, 400);
        
        // Reset rotation after completion
        setTimeout(() => {
            food.style.transition = 'none';
            food.style.transform = 'rotate(0deg)';
        }, 800);
    });
});