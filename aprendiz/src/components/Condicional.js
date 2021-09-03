import React, {Fragment} from 'react';

const Condicional = () =>{

    const temp = 23;

    return(<Fragment>
        <h3>
        {
            temp > 20 ? 'calor' : 'frio'
        }
        </h3>
    </Fragment>)
}

export default Condicional;