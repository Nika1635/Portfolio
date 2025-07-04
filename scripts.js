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

let boxes = document.querySelectorAll('.box');

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

boxes.forEach(box => observer.observe(box));

let photos = document.querySelectorAll('.photo');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('showPhoto');
    }
  });
}, {
  threshold: 0.1
});

photos.forEach(photo => observer.observe(photo));

const skillItems = document.querySelectorAll('.skill-item');

observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {
    threshold: 0.1
  });

  skillItems.forEach(item => observer.observe(item));