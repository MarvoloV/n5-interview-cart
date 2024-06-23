import React from 'react'
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div >
      <h1>Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/">Volver a la página principal</Link>
    </div>
  )
}

