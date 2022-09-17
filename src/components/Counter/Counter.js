import './Counter.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));  

  const sumar = () => count < stock ? setCount(count + 1) : alert('PRODUCTO AGOTADO')
  const restar = () => count > 0 ? setCount(count - 1) : alert('ERROR, minimo 1 unidad')

  useEffect(()=>{
    setCount(parseInt(initial))
  }, [initial])

    return (
        <div className='counter'>
            <button className='rest' onClick={restar}>-</button>
            <span>{count}</span>
            <button className='add' onClick={sumar}>+</button><span></span><button disabled={stock <=0} onClick ={() => onAdd(count)}> Agregar al carrito</button>
            <div>
                <Link className='volver' to='/'>Regresar</Link>
            </div>
        </div>
    )
}

export default Counter;