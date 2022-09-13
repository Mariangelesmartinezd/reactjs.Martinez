import data from "../Data";
import { useEffect, useState } from "react";
import Counter from "../Counter/Counter";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ }) => {

  const onAdd = (quantity)=>{
    console.log(`compraste ${quantity} unidades`)
  }

  const [prodList, setProdlist] = useState([]);


  useEffect(() => {
    getProducts.then((response) => {
      setProdlist(response)
    });
  }, []);

  const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 2000);
  })

  return (
    <>
      <Counter initial={1} stock={5} onAdd={onAdd}/>
      <ItemList lista={prodList} />
    </>
  )
};

export default ItemListContainer;