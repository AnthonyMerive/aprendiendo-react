// import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const url = "http://maestrogeekapp.herokuapp.com/data/";

function FormHooks() {
const [usuario, setUsuario] = useState([]);
const [values, setValues] = useState({
    id: '',
    documento: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    celular: '',
    direccion: '',
    imagen: ''
})
const {id, documento, nombres, apellidos, telefono, celular, direccion, imagen} = values;

useEffect(() => {
   peticionGet();
},[nombres])
const peticionGet = async () => {
   const res =  await fetch(url);
   const data = await res.json();
//    console.log(data)
   setUsuario(data)
}

const peticionPost = async () => {
    // console.log(values);
   await axios.post(url,values)
   .then(response => {
     console.log(response);
     peticionGet();
   })
   .catch(error => {
      console.log(error.message)
   })
}

const handleChange = ({target}) => {
      setValues({
        ...values,
        [target.name]: target.value
      })
    //   console.log(values);
}

  return (
    <div className="App">
        <h1>Registro</h1>
        <form>
          <label>Id</label>
          <input id="id" name="id" value={id} onChange={handleChange}/>
          <br/>
          <label>Documento</label>
          <input id="documento" name="documento" value={documento} onChange={handleChange}/>
          <br/>
          <label>Nombres</label>
          <input id="nombres" name="nombres" value={nombres} onChange={handleChange}/>
          <br/>
          <label>Apellidos</label>
          <input id="apellidos" name="apellidos" value={apellidos} onChange={handleChange}/>
          <br/>
          <label>Teléfono</label>
          <input id="telefono" name="telefono" value={telefono} onChange={handleChange}/>
          <br/>
          <label>Celular</label>
          <input id="celular" name="celular" value={celular} onChange={handleChange}/>
          <br/>
          <label>Dirección</label>
          <input id="direccion" name="direccion" value={direccion} onChange={handleChange}/>
          <br/>
          <label>Imagen</label>
          <input id="imagen" name="imagen" value={imagen} onChange={handleChange}/>
          <br/>
          <button
          onClick={() =>{peticionPost()}}>Enviar</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Documento</th>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Teléfono</th>
              <th>Celular</th>
              <th>Dirección</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
                  {
                     usuario.map(user => (
                       <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.documento}</td>
                          <td>{user.nombres}</td>
                          <td>{user.apellidos}</td>
                          <td>{user.telefono}</td>
                          <td>{user.celular}</td>
                          <td>{user.direccion}</td>
                          <td><img src={user.imagen} width="50px" alt=""/></td>
                       </tr>
                     ))
                  }
          </tbody>
        </table>
    </div>
  );
}
export default FormHooks;

