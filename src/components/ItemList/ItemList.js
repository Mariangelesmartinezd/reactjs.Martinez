import Item from "../Item/Item";

const ItemList = ({ lista = []}) => {

    return (

        <div className="contenedor">
            {lista.map((product) => (
                <div key={product.id} className="equis" info={product}>
                    <Item
                        nombre={product.nombre}
                        precio={product.precio}
                        img={product.img}
                        desc={product.desc}
                        tipo={product.tipo}
                    />
                </div>
            ))}
        </div>
    )
}

export default ItemList;