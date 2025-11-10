// url base
const ServiceUrl = 'http://127.0.0.1:5000';

export const getMensaje = async () => {
    try {
    const response = await fetch(ServiceUrl + '/saludo') // URL de la API de prueba
    if (!response.ok) {
      throw new Error('Error en la llamada al servicio')
    }
    const data = await response.json()
    console.log(data)
    return data.saludo
  } catch (error) {
    console.error(error)
    return 'Error al cargar mensaje'
  }
}