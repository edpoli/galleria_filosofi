import { useState } from 'react'
import PlatoImg from './assets/platone.jpg'
import LevinasImg from './assets/levinas.jpg'
import WittgensteinImg from './assets/witty.jpg'
import './App.css'

const filosofi = [{
  nome: "Platone", libro: "Repubblica", citazione: "Al di là dell'essenza c'è il Bene", immagine: PlatoImg
},
{
  nome: "Levinas", libro: "Totalità e infinito", citazione: "La vera vita è assente. Ma noi siamo al mondo", immagine: LevinasImg
},

{
  nome: "Wittgenstein", libro: "Tractatus logico-philosophicus", citazione: "Ciò di cui non si può parlare si deve tacere", immagine: WittgensteinImg
},



];


function App() {
  const [indice, setIndice] = useState(0)
  const [mostra, setMostra] = useState(false)
  const filosofo = filosofi[indice]
  const avanti = () => {
    setIndice(indice + 1)
    setMostra(false)
  }

  const indietro = () => {
    setIndice(indice - 1)
    setMostra(false)
  }

  return (
    <>


      <div>
        <h2 className='nome-pagina'> FILOSOFIA APPLICATA </h2>
        <h3> <em> GALLERIA FILOSOFI </em> </h3>
      </div>

      <div className='img-container'>
        <img className='img-filosofo' src={filosofo.immagine} alt={filosofo.immagine} />
      </div>

      <div>
        {filosofo.nome}
      </div>

      <div className='libro'>
        {filosofo.libro}
      </div>
      <hr />
      <div className='citazione'>
        <button onClick={() => setMostra(!mostra)}>
          {mostra ? "Nascondi" : "Mostra citazione"}
        </button>

        {mostra && <p>{filosofo.citazione}</p>}

      </div>


      <div className="btn-index" >
        <button
          className='btn-grad'
          onClick={indietro}
          disabled={indice === 0}
        > Indietro
        </button>

        <button
          className='btn-grad'
          onClick={avanti}
          disabled={indice === filosofi.length - 1}
        >
          Avanti
        </button>
      </div>
    </>
  )
}

export default App
