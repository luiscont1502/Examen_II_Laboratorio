import React,{Fragment,useState} from 'react';

const Formulario=()=>{
    const [datos,setDatos]=useState({
        nombre:''
    })
    const handleInputChange = (event) => {
        console.log(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]:event.target.value
        })
    }
    const enviarDatos=(event)=>{
        event.preventDefault();

    }
return (
    
<Fragment>
    <form className="row" onSubmit={enviarDatos}>
        <div className="col-ms-9">
            <input 
            type="text" 
            name="nombre"
            placeholder="Ingrese" 
            className="form-control"
            onChange={handleInputChange}
            ></input>
        </div>
        <div className="col-ms-3">
                <button className="btn btn-primary" type="submit">Guardar</button>
        </div>
    </form>
</Fragment>
);
}

export default Formulario;