import React,{Fragment,useState} from 'react';

const Formulario = () =>{

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (e) =>{
        //visualizamos el valor del imput
        // console.log(e.target.value)
        setDatos({
            ...datos, //pseudocopia de los nombres 
            [e.target.name] :  [e.target.value] //tomara el name de cada input
        })

    }

    const enviarDatos = (e) => {
        e.preventDefault();
     
        //al dar submit muestro los valores en consola
        console.log(`${datos.nombre} ${datos.apellido}`)

    }



    return(<Fragment>

        <h1>Formulario</h1>

        <form className="row" onSubmit={enviarDatos}>

            <div className="col-3">

            <input 
            placeholder="Nombre"
            className="form-control"
            type="text"
            name="nombre"
            // puede tener cualquier nombre dentro de onchange
            onChange={handleInputChange} 
            />
            </div>

            <div className="col-3">

            <input 
            placeholder="Apellido"
            className="form-control"
            type="text"
            name="apellido"
            onChange={handleInputChange}
            />

            </div>

            <div className="col-3">
                <button 
                className="btn btn-primary" 
                type="submit"
                >Enviar</button>
            </div>


        </form>

        {/* visualizo las input a tiempo real */}
        <div className="mt-3">
            {/* recordemos que estamos recorriendo un arreglo */}
            <h3>{datos.nombre} {datos.apellido}</h3>
        </div>


    </Fragment>)
}

export default Formulario;
