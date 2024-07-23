console.log("this is from index.js");

const content = document.getElementById('content');

const restaurantTitle = document.createElement('div');
restaurantTitle.innerHTML = "RESTAURANT TITLE FROM JS"

content.append(restaurantTitle);