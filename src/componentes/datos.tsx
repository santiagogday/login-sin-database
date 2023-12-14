import "./styles.css"
import { FormEvent, useState } from "react"


const Datos = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [email,setEmail] = useState("")
    const [resultado,setResultado] = useState("")

    const enviar = (e:FormEvent) => {
        e.preventDefault()
        const newRes = `Nombre: ${nombre}, Apellido:${apellido}, Email:${email}`
        setResultado(newRes)
    }

    return (
        <div className="contenedor">
            <form className="form">
                <input type="text" placeholder="Nombre" onChange={(e)=>setNombre(e.target.value)}/>
                <input type="text" placeholder="Apellido" onChange={(e)=>setApellido(e.target.value)}/>
                <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <button onClick={enviar}>Enviar</button>
            </form>
            <div className="resultado">
                {resultado}
            </div>
        </div>
    )
}

export default Datos