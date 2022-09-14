import '../Item/Item.css';
import { Link } from 'react-router-dom';

const Item = ({info}) => {
  return (
    
      <Link to={`/detalle/${info.id}`} className="info-product">
        <img src={info.img} className="img-producto" alt="img"/>
        <div className="nombre-producto">{info.nombre}</div>
        <div className="precio-producto">{info.precio} $</div>
        <div className="detalle">Ver detalles del producto</div>
        <div className="stock">Unidades disponibles  5</div>
      </Link>
  )
}

export default Item;