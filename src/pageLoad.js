export function initializePage() {
    console.log('Page is loaded and ready!');
    const content = document.getElementById('content');

    const restaurantTitle = document.createElement('h1');
    restaurantTitle.innerHTML = "THIS IS A REAL RESTAURANT WITH REAL FOOD PLEASE EAT"

    const foodImage = document.createElement('img');
    foodImage.alt = "";
    foodImage.src = "../src/assets/foodImage.jpg"


    content.append(restaurantTitle);
    content.append(foodImage);
  }