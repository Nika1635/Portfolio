let onlineShopPhoto = document.getElementById("onlineShopPhoto")
let hotelBookingPhoto = document.getElementById("hotelBookingPhoto")
let onlineRestaurantPhoto = document.getElementById("onlineRestaurantPhoto")

let num = ""

function goToPage(name){
    let num = name

    if(num === 1){
        window.open("https://online-shop-ashy-tau.vercel.app");
    }else if(num === 2){
        window.open("https://hotel-project-angular.vercel.app");
    }else if(num === 3){
        window.open("https://restaurant-project-ag.vercel.app");
    }
}

const boxes = document.querySelectorAll('.box');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

boxes.forEach(box => observer.observe(box));

