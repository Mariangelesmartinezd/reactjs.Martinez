import Item from "../Item/Item";

const ItemList = ({ lista = []}) => {

    return (

        <div className="contenedor">
            {lista.map(product => <Item key={product.id} info={product}
                        nombre={product.nombre}
                        precio={product.precio}
                        img={product.img}
                        desc={product.desc}
                        tipo={product.tipo}
                        id={product.id}
                    />
            
            )}
        </div>
    )
}

export default ItemList;