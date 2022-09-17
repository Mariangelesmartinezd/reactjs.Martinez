import Counter from '../Counter/Counter';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ItemDetail = ({ info }) => {

  const [goTocart, setGoTocard] = useState(false)
    

  const onAdd = ()=> {
    setGoTocard(true);
  }

  return (
    <>
      <div className='contenedor-detail'>
        <div className='equis-detail'>
          <img src={info.img} className="img-producto" alt="img" />
          <div className="nombre-producto-det">{info.nombre}</div>
          <div className="desc-det">{info.desc}</div>
          <div className="precio-producto-det">Precio {info.precio} $</div>
          {
            goTocart ? <Link className='link' to='/cart'>Hacé clic para terminar tu compra</Link> : <Counter initial={1} stock={5} onAdd={onAdd} />
          }

          
        </div>

      </div>

    </>
  )
}

export default ItemDetail;