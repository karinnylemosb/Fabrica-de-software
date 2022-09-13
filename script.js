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
  {
    id: 6,
    name: 'Kaban Loper',
    email: 'gragner_r@annie.ca',
    image: 'https://robohash.org/F8K.png?set=set1',
  },
];

const elementoH1 = document.querySelector('h1');

for (let objeto of dados) {
  const elementArticle = document.createElement('article');

  elementArticle.classList.add('monstros');

  elementArticle.innerHTML = `
  <img src="${objeto.image}" alt="Monstrinho">
    <div>
      <h2> ${objeto.name}</h2>
      <p> ${objeto.email}</p>
    </div>  `;

  elementoH1.insertAdjacentElement('afterend', elementArticle);
}

//Botão
const btn = document.querySelector('.btn-azul');
btn.addEventListener('click', () => {
  let articles = document.querySelectorAll('article');
  for (let i = 0; i < articles.length; i++) {
    articles[i].remove();
  }
});

//
