import './ItemDetail.css';

const ItemDetail = ({data}) => {
  
    return (
      <><h1>detalle</h1>
        <div className="contenedor-detail">
          <img className="img-detail"src={data.img} alt={data.nombre}/>
          <h2>{data.nombre}</h2>
          <div className="product-information">
            <p>{data.desc}</p>
            <p>{data.tipo}</p>
            <p>{data.precio}</p>
          </div>
        </div>
        </>
    )
  }
  
  export default ItemDetail;