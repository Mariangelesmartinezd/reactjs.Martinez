import Counter from '../Counter/Counter';
import './ItemDetail.css';



const ItemDetail = ({prodList}) => {

  return (
    <>
      <div className='contenedor-detail'>
        <div className='equis-detail'>
        <img src={prodList.img} className="img-producto" alt="img" id={prodList.id}/>
        <div className="nombre-producto-det">{prodList.nombre}</div>
        <div className="desc-det">{prodList.desc}</div>
        <div className="precio-producto-det">Precio {prodList.precio} $</div>
      
        <Counter initial={0} stock={5}/>
        </div>

      </div>


    </>
  )
}

export default ItemDetail;