import React, { useState, Fragment } from 'react'

const Helado = () => {

    const [billete, setBillete] = useState(0)
    const [arr, setArr] = useState([])
    const [error, setError] = useState(null)
    const [res, setRes] = useState('')
    let rtn = false

    const addBillete = (e) => {
        e.preventDefault()
        console.log('billete', billete);
        const validate = parseInt(billete)
        if (validate === 5 || validate === 10 ||validate === 20 ) {
            console.log('cuenta ', arr);
            setArr([...arr, validate])
            setBillete('')
            setError(null)
        } else {
            setError('Solo recibimos denominaciones de 5, 10 y 20'); return
        }
    }

    const comprar = (e) => {
        e.preventDefault()
        let residuo = 0
        let cont = 0
        let vuelto = []
        let val = 0
        arr.map( (el, id, arr) => {
            cont = cont + el
            residuo = el - 5
            val = cont - 5
            vuelto.push(el)
                if (val >= residuo && arr.includes(residuo)) {
                    cont = cont - residuo
                    console.log('tiene vueltos');
                    rtn = true
                }
                if(rtn === true) {
                    setRes('si')
                }else if(rtn === false) {
                    setRes('no')
                }
                vuelto.shift()
            return cont
        })
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
                    <h2>Compre su Helado</h2>
                        <form onSubmit={(e) => addBillete(e)} className="form-group">

                            <label htmlFor="billete" className="form-label">Billete con el que paga</label>
                            {error != null ? <div className="alert alert-danger"> {error} </div> : <div></div>}
                            <input type="text" pattern="[0-9]*"
                                className="form-control mb-3"
                                onChange={(e) => { setBillete(e.target.value) }}
                                placeholder="Ingrese unidades del billete"
                                value={billete}
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
                                <h5 className="card-title">Listado de los compras</h5>
                                <ul className="card-text list-group" style={yy}>
                                    {
                                        arr.map(
                                            (item, id) => <li key={id} className="list-group-item">
                                                {item}
                                            </li>
                                        )
                                    }
                                </ul>
                                <input type="submit" className="btn btn-primary btn-block" value="Cuentas" onClick={(e) => { comprar(e) }}/>
                                <h5 className="card-title" style={margtitle}>{`${res} es posible devolver cambio `}</h5>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Helado
