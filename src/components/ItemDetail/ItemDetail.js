import Counter from '../Counter/Counter';
import './ItemDetail.css';


const ItemDetail = ({detail}) => {

  return (
    <>
      <div className='contenedor-detail'>
        <div className='equis-detail'>
        <img src={detail.img} className="img-producto" alt="img"/>
        <div className="nombre-producto-det">{detail.nombre}</div>
        <div className="desc-det">{detail.desc}</div>
        <div className="precio-producto-det">Precio {detail.precio} $</div>
        <Counter initial={1} stock={5}/>
        </div>

      </div>


    </>
  )
}

export default ItemDetail;