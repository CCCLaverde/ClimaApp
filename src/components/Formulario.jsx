import { useState } from "react"
import useClima from "../hooks/useClima"

export const Formulario = () => {

    const [alerta, setAlerta] = useState ('')

    const {busqueda, datosBusqueda, consultarClima} = useClima ()

    const {ciudad , pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')){
            setAlerta('Todos los campos son obligatorios')
            return
        }

        setAlerta('')

        consultarClima([busqueda.ciudad, busqueda.pais])
    }

    return (
   
    <div className="contenedor">

        {alerta && <p>{alerta}</p>}

        <form onSubmit={handleSubmit}>

            <div className="campo">
                <label htmlFor="ciudad">Ciudad</label>
                <input 
                    type="text" 
                    id="cluidad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">Pais</label>
                <select
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value=''>Seleccione un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CO">Colombia</option>
                    <option value="AU">Australia</option>
                    <option value="GB">Gran Bretaña</option>
                    <option value="FR">Francia</option>
                    <option value="DE">Alemania</option>
                    <option value="IT">Italia</option>
                    <option value="CA">Canada</option>
                    <option value="CH">Suiza</option>
                    <option value="ES">España</option>
                </select>
            </div>

            <input 
                type="submit" 
                value='Consultar Clima'
            />
        </form>
    </div>
  )
}
