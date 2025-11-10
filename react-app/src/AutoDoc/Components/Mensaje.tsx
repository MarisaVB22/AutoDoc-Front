import { useState, useEffect } from 'react'
import { getMensaje } from '../Services/services' // importación del servicio

const Mensaje = () => {
  const [mensaje, setMensaje] = useState('Cargando...') // Estado para almacenar el mensaje. Se inicializa con 'Cargando...'

  useEffect(() => {
    getMensaje().then((msg) => setMensaje(msg))
  }, []) // Cuando el componente se monta, se llama a getMensaje y se actualiza el estado con el mensaje recibido

  return <p>{mensaje}</p> // Devuelve un párrafo con el mensaje
}

export default Mensaje