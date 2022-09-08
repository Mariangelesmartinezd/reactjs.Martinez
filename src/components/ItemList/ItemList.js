import Item from "../Item/Item";

const ItemList = ({ lista }) => {

    return (

        <div>
            {lista.map((product) => (
                <div key={product.id}>
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