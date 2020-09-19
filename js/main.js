'use strict';

window.addEventListener('load', function() {
  document.querySelector('.preloader').classList.add('opacity-0');
  setTimeout(function() {
    document.querySelector('.preloader').style.display = 'none';
  }, 1000);
});

const filterContainer = document.querySelector('.portfolio-filter');
const filterButtons = filterContainer.children;
const totalFilterButton = filterButtons.length;
const portfolioItems = document.querySelectorAll('.portfolio-item');
const totalPortfolioItem = portfolioItems.length;


for (let i = 0; i < totalFilterButton; i++) {
  filterButtons[i].addEventListener('click', function() {
    filterContainer.querySelector('.active').classList.remove('active');
    this.classList.add('active');

    const filterValue = this.getAttribute('data-filter');

    for (let i = 0; i < totalPortfolioItem; i++) {
      if (filterValue === portfolioItems[i].getAttribute('data-category')) {
        portfolioItems[i].classList.remove('hide');
        portfolioItems[i].classList.add('show');
      } else {
        portfolioItems[i].classList.remove('show');
        portfolioItems[i].classList.add('hide');
      }

      if (filterValue === 'all') {
        portfolioItems[i].classList.remove('hide');
        portfolioItems[i].classList.add('show');
      }
    }
  });
}

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');
const lightboxClose = lightbox.querySelector('.lightbox-close');
const lightboxText = lightbox.querySelector('.caption-text');
const lightboxCounter = lightbox.querySelector('.caption-counter');
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItem; i++) {
  portfolioItems[i].addEventListener('click', function() {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}

function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItem -1;
  } else {
    itemIndex--;
  }

  changeItem();
}

function nextItem() {
  if (itemIndex === totalPortfolioItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }

  changeItem();
}

function toggleLightbox() {
  lightbox.classList.toggle('open');
}

function changeItem() {
  let imgSrc = portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
  lightboxCounter.innerHTML = (itemIndex + 1) + ' of ' + totalPortfolioItem;
}

lightbox.addEventListener('click', function(event){
  if(event.target === lightboxClose || event.target === lightbox) {
    toggleLightbox();
  }
});

const menu = document.querySelector('.menu');
const menuList = menu.querySelectorAll('li');
const totalMenuList = menuList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;

for (let i = 0; i < totalMenuList; i++) {
  const menuLink = menuList[i].querySelector('a');

  menuLink.addEventListener('click', function() {
    removeBackSectionClass();

    for (let i = 0; i < totalMenuList; i++) {
      if (menuList[i].querySelector('a').classList.contains('active')) {
        addBackSectionClass(i);
      }

      menuList[i].querySelector('a').classList.remove('active');
    }

    this.classList.add('active');

    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerButton();
    }
  });
}

function removeBackSectionClass() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('back-section');
  }
}

function addBackSectionClass(num) {
  allSection[num].classList.add('back-section');
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove('active');
  }

  const target = element.getAttribute('href').split('#')[1];

  document.querySelector('#' + target).classList.add('active');
}

function updateNav(element) {
  for (let i = 0; i < totalMenuList; i++) {
    menuList[i].querySelector('a').classList.remove('active');
    const target = element.getAttribute('href').split('#')[1];

    if (target === menuList[i].querySelector('a').getAttribute('href').split('#')[1]) {
      menuList[i].querySelector('a').classList.add('active');
    }
  }
}

document.querySelector('.hire-me').addEventListener('click', function() {
  const sectionIndex = this.getAttribute('data-section-index');

  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});

const navTogglerButton = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');

navTogglerButton.addEventListener('click', ()=>{
  asideSectionTogglerButton();
});

function asideSectionTogglerButton() {
  aside.classList.toggle('open');
  navTogglerButton.classList.toggle('open');

  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle('open');
  }
}
