import React, { useState, Fragment } from 'react'
//import uniqid from 'uniqid'

const Camion = () => {
    const [camion, setCamion] = useState(0)
    const [paquete, setPaquete] = useState(0)
    const [array, setArray] = useState([])
    //const [modedit, setModedit] = useState(false)
    const [error, setError] = useState(null)
    //const [id, setId] = useState()

    const addCamion = (e) => {
        e.preventDefault()
        //if (e.target.value === undefined) { setError('Campo vacío'); return }
        // const item = {
        //     id: uniqid(),
        //     numpaquete: paquete
        // }
        setArray([...array, paquete])
        setPaquete('')
        setError(null)
    }

    
    // const editar = (item) => {
    //     setModedit(true)
    //     setPaquete(item.numpaquete)
    //     setId(item.id)
    // }

    // const editpaquete = (e) => {
    //     e.preventDefault()
    //     const newArray = array.map(item => item.id === id ? { id: id, numpaquete: paquete } : item)
    //     setArray(newArray)
    //     setModedit(false)
    //     setPaquete('')
    // }

    // const deletepaquete = (id) => {
    //     const newArray = array.filter(item => item.id !== id)
    //     setArray(newArray)
    // }

    const [shArr, setShArr] = useState([])
    let tmp = []
    const cuenta = () => {
        const restante = camion - 30;
        if (camion > 32) {
            //declaración de variables
            let sum = 0
            let entero = 0
            let arrayOrden = []
            let reverse = []
            let arrayEnteros = []
            let posi = 0
            
            //recorro el array y asigno en array enteros
            array.map((el, index, array) => {
                entero = parseInt(el);
                arrayEnteros.push(entero)
                
                return console.log('array ordenado y llenos de enteros')
            })
            //ordenamos el array
            arrayOrden = arrayEnteros.sort(function (a, b) { return a - b })
            reverse = arrayOrden.reverse()
            console.log('arrayOrden ', arrayOrden)
            reverse.map( (element, id, arr) => {
                if (element < restante) {
                    sum += element;
                    if(sum < restante){
                        tmp.push(element)
                        setShArr(searches => searches.concat(element))
                        posi += Math.min.apply(null, arr)
                        if(posi + element <= restante ){
                            tmp.push(posi)
                            sum += posi
                        }
                    }                    
                }
                return tmp
            })
            console.log('tmp ', tmp)
            
        }

    }

    const styles = {
        with: "18rem",
        border: "1px solid red"
    }

    const yy = {
        marginLeft: 5
    }
    const margtitle = {
        marginTop: "1.5rem"
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <h2>Seleccione la cantidad a ingresar en el camion</h2>
                        <form onSubmit={(e) => addCamion(e)} className="form-group">
                            <label htmlFor="Camion" className="form-label">Tamaño del Camion</label>

                            <input type="number"
                                className="form-control mb-3"
                                onChange={(e) => { setCamion(e.target.value) }}
                                placeholder="Ingrese tamaño del Camion"
                                value={camion}
                            />
                            <label htmlFor="paquete" className="form-label">Unidades de paquetes</label>
                            {error != null ? <div className="alert alert-danger"> {error} </div> : <div></div>}
                            <input type="number"
                                className="form-control mb-3"
                                onChange={(e) => { setPaquete(e.target.value) }}
                                placeholder="Ingrese unidades de paquetes"
                                value={paquete}
                            />
                            <input type="submit"
                                className="btn btn-info btn-block"
                                value={'registrar'}
                            />
                        </form>
                    </div>
                    <div className="col-sm">
                    <div className="card" style={styles}>
                            <div className="card-body">
                                <h5 className="card-title">Listado de los paquetes</h5>
                                <ul className="card-text list-group" style={yy}>
                                    {
                                        array.map(
                                            (item, id) => <li key={id} className="list-group-item">
                                                {item}
                                                {/* <button className="btn btn-danger float-right" onClick={() => { deletepaquete(item) }}>Borrar</button>
                                                <button className="btn btn-info float-right" onClick={() => { editar(item) }}>Editar</button> */}
                                            </li>
                                        )
                                    }
                                </ul>
                                <input type="submit" className="btn btn-primary btn-block" value="Cuentas" onClick={(e) => { cuenta(e) }}/>
                                <h5 className="card-title" style={margtitle}>Paquetes a ingresar al camion</h5>
                                <ul className="card-text list-group" style={yy}>
                                    {
                                        shArr.map(
                                            (elementos, index, arr) =>
                                            <li key={index} className="list-group-item">
                                                {elementos}
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Camion
