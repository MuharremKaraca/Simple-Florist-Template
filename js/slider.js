var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 10,
  spaceBetween: 0,
  breakpoints: {
    "@0.00": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    "@1.50": {
      slidesPerView: 10,
      spaceBetween: 5,
    },
  },
});

// Kayma
window.addEventListener("scroll", function() {
  if (window.pageYOffset >= 150) {
      document.querySelector('#yukari').style.display = "block";
  } else {
      document.querySelector('#yukari').style.display = "none";
  }
});

// Tıklama
document.querySelector('#yukari').addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

var araIcon = document.getElementById("location-icon");
function myPro(imgs) {

  var fullImg = document.getElementById("big-img");
  fullImg.src = imgs.src;
}
document.addEventListener('click', function (e) {
  araIcon.classList.add('active');
});
window.onclick = function (event) {
  if (event.target == araIcon) {
    araIcon.classList.remove("active");
  }
}