import './App.css'
import InputTarea from './components/inputTarea/inputTarea'
import ListaTareas from './components/listaTareas/listaTareas'
import { useState } from 'react'

function App() {

  const [tareas, setTareas] = useState([
    { texto: "Comprar pan", hecha: false, borrado: null },
    { texto: "Comprar leche", hecha: false, borrado: null }
  ])

  function intentarAgregarTarea(textoTarea) {
    /* Primero que compruebe que no está vacío. Comprobar en el string consume más recursos y tarda más */
    if (textoTarea !== "" && tareas.find(x => x.texto === textoTarea) === undefined) {
      setTareas([{ texto: textoTarea, hecha: false, borrado: null }, ...tareas])
      console.log(tareas)
    }
  }

  /* Función para cambiar el valor de la tarea hecha o no */
  function cambiarEstadoTarea(tareaCambiar) {
    setTareas(tareas.map(t => {
      if (t.texto === tareaCambiar.texto) {
        return { ...t, hecha: !t.hecha }
      } else {
        return t
      }
    }))
  }

  return (
    <>
      {/* Titulo y nos muestra en tiempo real cuantas tareas tenemos creadas */}
      <h1>Lista de tareas ({tareas.length})</h1>
      {/* Nos muestra en tiempo real cuantas tareas tenemos pendientes y cuantas realizadas */}
      <h5>Hechas: {tareas.filter(x => x.hecha).length}</h5>
      <h5>Pendientes: {tareas.filter(x => !x.hecha).length}</h5>
      <InputTarea onAgregarTarea={intentarAgregarTarea}></InputTarea>
      <ListaTareas onTareaCambiada={cambiarEstadoTarea} tareas={tareas}></ListaTareas>
    </>
  )
}

export default App