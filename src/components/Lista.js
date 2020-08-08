import React, { useState, Fragment } from 'react'
import Formulario from './form'
import {InputGroup,Button,Container,Row} from 'react-bootstrap'
import styles from './style.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
const Lista = () => {
    const [array, setNumero] = useState(['Estudiar', 'Cocinar', 'Dormir'])
    const [valor,setValor]=useState({
        nombre:''
    })

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setValor({
            ...valor,
            [event.target.name]:event.target.value
        })
    }
    const agregarElemento = (event) =>{
        event.preventDefault();
        setNumero([...array,valor.nombre])
    }
    const [Eliminar, setEliminar]=useState(array);
    const eliminar = () =>{
        setNumero(
            array.filter(nom => nom.nombre!==valor.nombre)
        )

    }
    const handleRemoveItem = idx => {
        // assigning the list to temp variable
        const temp = [...array];
    
        // removing the element using splice
        temp.splice(idx, 1);
    
        // updating the list
        setNumero(temp);
    }
    return (

        <Fragment>
            
               
                <div className="container"  style={{margin: `0 auto`, maxWidth: 400,borderBottomLeftRadius:20, marginTop:50}}>
                    <div class="row ">
                        <div style={{ padding: "0.5rem", background: `#0A76B5`, width: `100%`, borderTopRightRadius: 20, borderTopLeftRadius: 20 }} class="text-center">
                            <h3 >Lista de tareas Pendientes</h3>
                        </div>
                      
                            <div class="container" style={{height:42}}>
                                   <form className="row" onSubmit={agregarElemento}>
                                    <div class="col-9">
                                    <input
                                    type="text"
                                    name="nombre"
                                    placeholder="Una tarea pendiente"
                                     className="form-control"
                                     onChange={handleInputChange}
                                    style={{border:"none", marginBottom:0}}
                                    ></input></div>
                                    <div className="col-2 btn-sm ml-auto" ><Button variant="outline-secondary" type="submit"
                                    style={{ color: `#010707`, border: `none`  }}
                                    > <FontAwesomeIcon icon={faPlus}/>  </Button></div>
                                   </form>      
                            </div>
             
                                <table class="table"  style={{margin: `0 auto`, maxWidth: 400,borderRadius: 20}}>
                                    <thead>

                                    </thead>
                                  
                                    <tbody>
                                        {array.map((item,itn) =>
                                            <tr key={itn}  >

                                                <td scope="row" style={{ width: 15, background: `#55AEB7` }}   > <input name="packersOff"   value="1" type="checkbox" ></input></td>
                                                <td style={{ width: 250, height: 20 }} ><label  for="packersOff" className={styles.strikeThis}>{item}</label></td>

                                                <td style={{ background: `#55AEB7`, width: 40}}><Button 
                                                
                                                variant="outline-secondary"
                                                 style={{ color: `#010707`, border: `none` }} className="text-center" onClick={() =>handleRemoveItem(itn)}><FontAwesomeIcon icon={faTrashAlt} />  </Button></td>
                                            </tr>

                                        )}
                                    </tbody>
                                </table>

                        
                    </div>


                </div>




        
        </Fragment>

    )
}


export default Lista;