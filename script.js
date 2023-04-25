import { burgerList } from './data.js';

const container = document.querySelector('#burger-container');

burgerList.forEach(burger => {
    const burgerCard = document.createElement('div');
    burgerCard.classList.add('burger-card');
    const burgerImg = document.createElement('div');
    burgerImg.classList.add('burger-img');
    const img = document.createElement('img');
    img.src = burger.img;
    img.alt = burger.nom;
    burgerImg.appendChild(img);
    const burgerDetails = document.createElement('div');
    burgerDetails.classList.add('burger-details');
    const nom = document.createElement('h2');
    nom.textContent = burger.nom;
    const description = document.createElement('p');
    description.textContent = burger.description;
    const prix = document.createElement('p');
    prix.textContent = burger.prix;
    burgerDetails.appendChild(nom);
    burgerDetails.appendChild(description);
    burgerDetails.appendChild(prix);
    burgerCard.appendChild(burgerImg);
    burgerCard.appendChild(burgerDetails);
    container.appendChild(burgerCard);
  });