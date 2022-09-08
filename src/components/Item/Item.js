


const Item = ({nombre, precio, img}) => {
  return (
    
      <div className="contenedor-producto">
        <img src={img} className="img-producto" alt="img"/>
        <div className="nombre-producto">{nombre}</div>
        <div className="precio-producto">{precio} $</div>
        <div className="detalle">Ver detalles del producto</div>
        <div className="stock">Unidades disponibles  5</div>
      </div>
  )
}

export default Item;