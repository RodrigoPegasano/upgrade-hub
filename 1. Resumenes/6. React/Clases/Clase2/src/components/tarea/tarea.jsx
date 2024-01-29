import AccionesTarea from "../accionesTarea/accionesTarea"

function Tarea({ tarea, onTareaCambiada }) {

    function cambiarEstado(e) {
        onTareaCambiada(tarea)
        console.log("Cambiando estado")
    }

    return (

        <li>
            <label>{tarea.texto}</label>
            {/* <AccionesTarea></AccionesTarea> */}
            {/* <label>{" "}</label>
            <label>{tarea.hecha ? "true" : "false"}</label> */}
            <input type="checkbox" checked={tarea.hecha} onChange={cambiarEstado}></input>
        </li>

    )
}

export default Tarea