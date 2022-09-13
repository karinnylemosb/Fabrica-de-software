let dados = [];

const elementoH1 = document.querySelector('h1');
const btn = document.querySelector('.btn-azul');

// // Fazendo o fetch
// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((json) => {
//     dados = json;
//     elementoH1.innerText = `${dados.length} monstros`;

//     for (let objeto of dados) {
//       const elemtArticle = document.createElement('article');
//       elemtArticle.classList.add('monstros');

//       elemtArticle.innerHTML = `
//       <img src="https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}" />
//         <div>
//           <h2>${objeto.name}</h2>
//           <p>${objeto.email}</p>
//         </div>
//       `;

//       elementoH1.insertAdjacentElement('afterend', elemtArticle);
//     }
//   });

//Evento do Botão
btn.addEventListener('click', () => {
  let articles = document.querySelectorAll('article');
  for (let i = 0; i < articles.length; i++) {
    articles[i].remove();
  }
  dados = [];
});

async function renderizar() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const dadosJSON = await response.json();

  dados = dadosJSON;
  elementoH1.innerText = `${dados.length} monstros`;

  for (let objeto of dados) {
    const elemtArticle = document.createElement('article');
    elemtArticle.classList.add('monstros');

    elemtArticle.innerHTML = `
      <img src="https://robohash.org/${objeto.id}?set=set2" alt="${objeto.name}" />
        <div>
          <h2>${objeto.name}</h2>
          <p>${objeto.email}</p>
        </div>
      `;

    elementoH1.insertAdjacentElement('afterend', elemtArticle);
  }
}

// const renderizar = async () => {

// }

renderizar();
