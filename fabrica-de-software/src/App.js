import { useState } from 'react';
import dados from './dados/dadosFake';

function App() {
  const [dadosFake, setdadosFake] = useState(dados); //Setdados sempre zera tudo, por isso foi usado no botão apagar

  return (
    <main>
      <section className="container">
        <h1> Monstros</h1>

        {dadosFake.map((objeto) => {
          return (
            <article className="monstros">
              <img src={objeto.image} alt="imagem"></img>

              <div>
                <h2> {objeto.name}</h2>
                <p> {objeto.email}</p>
              </div>
            </article>
          );
        })}

        <button
          type="button"
          className="btn-azul"
          onClick={() => {
            setdadosFake([]);
          }}
        >
          {' '}
          Limpar monstros{' '}
        </button>
      </section>
    </main>
  );
}

export default App;
