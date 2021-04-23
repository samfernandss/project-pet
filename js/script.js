'use strict';

function buildCarousel() {
  images.forEach((image, index) => {
    const imageElement = document.createElement('img');
    imageElement.setAttribute('class', 'd-block w-100 mx-auto block');
    imageElement.setAttribute('src', image.src);
    imageElement.setAttribute('title', image.title);
    imageElement.style.height = '500px';

    const carouselItem = document.createElement('div');
    carouselItem.setAttribute('data-interval', 5000);

    carouselItem.setAttribute('class',
      index === 0
        ? 'carousel-item active'
        : 'carousel-item'
    );

    carouselItem.appendChild(imageElement);
    document.querySelector('#myCarousel').appendChild(carouselItem);
  });
}

function buildRowElement() {
  const trElement = document.createElement('tr');

  tdElements.forEach( td => {
    td.ref = document.createElement('td');
    td.ref.textContent = 
      td.key !== 'age' 
        ? petInfo[td.key]
        : `${petInfo.oldInYears}, ${petInfo.oldInMonths} years old.`;
    
    trElement.appendChild(td.ref);
  });

  document.querySelector('tbody').appendChild(trElement);
}

function getPetsInfo() {
  document.querySelector('#petName')
    .addEventListener('change', ({ target: { value } }) => {
      petInfo.name = value;
    });

  document.querySelector('#petSpecie')
    .addEventListener('change', ({ target: { value } }) => {
      petInfo.specie = value;
    });

  document.querySelector('#petAge')
    .addEventListener('change', ({ target: { value } }) => {
      petInfo.oldInYears = value;
    });

  document.querySelector('#petAgeMonth')
    .addEventListener('change', ({ target: { value } }) => {
      petInfo.oldInMonths = value;
    });
}

document.querySelector('#save')
  .addEventListener('click', () => {
    buildRowElement();

    console.log(petInfo.name, petInfo.specie, petInfo.oldInMonths, petInfo.oldInYears);
  });

buildCarousel();
getPetsInfo();