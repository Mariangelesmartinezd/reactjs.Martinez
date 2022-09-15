import Counter from '../Counter/Counter';
import './ItemDetail.css';



const ItemDetail = ({info}) => {

  return (
    <>
      <div className='contenedor-detail'>
        <div className='equis-detail'>
        <img src={info.img} className="img-producto" alt="img"/>
        <div className="nombre-producto-det">{info.nombre}</div>
        <div className="desc-det">{info.desc}</div>
        <div className="precio-producto-det">Precio {info.precio} $</div>
      
        <Counter initial={0} stock={5}/>
        </div>

      </div>


    </>
  )
}

export default ItemDetail;