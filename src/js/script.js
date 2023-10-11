import VacancyBtn from "./modules/VacancyBtn";
import Content from "./modules/Content";
import Nav from "./modules/Nav";
import Tab from "./modules/Tab";
import VSwiper from "./modules/VSwiper";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

function initGallerySlider() {
  swiper.init(".tmpl-hh__gallery-slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      prevEl: ".tmpl-hh__gallery-slider-arrow-prev",
      nextEl: ".tmpl-hh__gallery-slider-arrow-next",
    },
    bulletActiveClass: ".tmpl-hh__gallery-slider-pagination-active",
    pagination: {
      el: ".tmpl-hh__gallery-slider__pagination",
      clickable: true,
    },
    breakpoints: {
      1339: {
        spaceBetween: 30,
      },
      529: {
        spaceBetween: 15,
      },
    },
  });
}
const lgBtns = document.querySelectorAll(".tmpl-hh__header__lg");
const lgImgs = document.querySelectorAll(".tmpl-hh__header__lg-img");

lgBtns.forEach((item) => {
	item.addEventListener("click", function () {
		item.classList.toggle("tmpl-hh__active");
		lgImgs.forEach((img) => {
  		img.classList.toggle("tmpl-hh__up");		
		})
	});
})

// lgBtn.addEventListener("click", function () {
//   lgBtn.classList.toggle("tmpl-hh__active");
//   lgImg.classList.toggle("tmpl-hh__up");
// });
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

// setTimeout(function() {
// 	var wrapper = document.querySelector('.tmpl-hh__wrapper');
// 	var grid = document.querySelector('.tmpl-hh__grid');
// 	grid.style.display = 'none';
// 	wrapper.style.height = 'auto';
// }, 5000);

const swiper = new VSwiper();

new VacancyBtn();
new Content();
new Nav();
new Tab();
initGallerySlider();