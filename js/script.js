'use strict';

function mountCarousel() {
  images.forEach((image, index) => {
    const imageElement = document.createElement('img');
      imageElement.setAttribute('class', 'd-block w-100 mx-auto block');
      imageElement.setAttribute('src', image.src);
      imageElement.setAttribute('title', image.title);
      imageElement.style.height = '500px';

    const carouselItem = document.createElement('div');
    carouselItem.setAttribute('data-interval', 5000);

    if (index === 0) {
      carouselItem.setAttribute('class', 'carousel-item active')
    } else {
      carouselItem.setAttribute('class', 'carousel-item')
    }

    carouselItem.appendChild(imageElement);
    document.querySelector('#myCarousel').appendChild(carouselItem);
  });
}

const trElement = document.createElement('tr');
const thElement = document.createElement('th');
const tdElement = document.createElement('td');
document.querySelector('tbody').appendChild(trElement);

{/* <tr>
						<th scope="row">1</th>
						<td>Puruca</td>
						<td>Dog</td>
						<td>13 years</td>
					</tr>
				</tbody> */}

const btnSave = document.querySelector('#save');
btnSave.addEventListener('click', function(){

})

mountCarousel();