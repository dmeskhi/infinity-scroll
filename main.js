const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photoArray = [];

//Unsplash API
const count = 10;
const apiKey = 'gcO6HEgS6wU83Am1meK18CDDyhuVNwflNZ80S0BZcRA';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhotos();
    } catch (error) {
        // Catch error here
    }
}

// Run function on page load
getPhotos();