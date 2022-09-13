let dados = [
  {
    id: 1,
    name: 'Bertie Yates',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?set=set2',
  },
  {
    id: 2,
    name: 'Hester Hogan',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?set=set2',
  },
  {
    id: 3,
    name: 'Larry Little',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?set=set2',
  },
  {
    id: 4,
    name: 'Sean Walsh',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?set=set2',
  },
  {
    id: 5,
    name: 'Lola Gardner',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?set=set2',
  },
];

const elementoH1 = document.querySelector('h1');
const elementArticle = document.createElement('article');
elementArticle.classList.add('monstros');

elementArticle.innerHTML = `<img src="https://images-ext-2.discordapp.net/external/JIFruA9tz7ltiJj74n45aA1Pl9Z8BaU2CJY9PB9ZxEk/%3Fset%3Dset2/https/robohash.org/5" alt="Monstrinho">
<div><h2> Nome</h2><p> E-mail</p></div>`;

elementoH1.insertAdjacentElement('afterend', elementArticle);
