import React from 'react'
import ReactDOM from 'react-dom/client'
import Datos from './componentes/datos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>Ingrese sus datos</h1>
    <Datos/>
  </React.StrictMode>,
)
