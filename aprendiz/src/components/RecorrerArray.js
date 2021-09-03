import React, {Fragment,useState} from 'react';

const RecorrerArray = () =>{

    //set+estado, para modificacion de estados

    const [arrayNumero, setNumero] = useState([1,2,3,4,5])

    const [num, setNum] = useState(6);

    const agregarElemento = () =>{
        console.log('evento click funciona');
        //cambiar de estado al dar click
        // setNumero([6]) //agregarlo de cero

        //seteo un nuevo numero para que aumente en 1
        setNum(num+1)
        
        setNumero(
            [
            ...arrayNumero, 
            num
        ]) //agrega manteniendo el array

    }

    console.log(arrayNumero)

    return (<Fragment>

    <h2>Recorrer y agregar array</h2>

        <button onClick={agregarElemento}>Agregar</button>

        {
            arrayNumero.map((num, indexDelArray) =>
                <p key={indexDelArray}> {num} - {indexDelArray}</p>
            )
            
        }

    </Fragment>);
    
}

export default RecorrerArray;