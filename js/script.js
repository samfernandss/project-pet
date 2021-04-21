'use strict';

const petInfo = {
  name: '',
  specie: '',
  oldInYears: 0,
  oldInMonths: 0
}

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
  const tdIdElement = document.createElement('td');
  const tdNameElement = document.createElement('td');
  const tdSpecieElement = document.createElement('td');
  const tdAgeElement = document.createElement('td');

  tdIdElement.textContent = '';
  tdNameElement.textContent = petInfo.name;
  tdSpecieElement.textContent = petInfo.specie;
  tdAgeElement.textContent = `${petInfo.oldInYears},${petInfo.oldInMonths} years old.`;

  trElement.appendChild(tdIdElement);
  trElement.appendChild(tdNameElement);
  trElement.appendChild(tdSpecieElement);
  trElement.appendChild(tdAgeElement);
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