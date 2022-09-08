import data from "../Data";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {

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
  });

  return (
    <>
     
      <ItemList lista={prodList}/>
    </>
  )
};

export default ItemListContainer;