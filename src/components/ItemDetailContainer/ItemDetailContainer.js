import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";
import data from "../Data";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {

  const [prodList, setProdList] = useState({});

  const { detalleId } = useParams();

  useEffect(() => {
    const getProdList = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data)
      }, 2000);
    });

    getProdList.then(response => setProdList(response.filter(data => data.id === parseInt(detalleId))))
  }, []);

  
console.log(prodList)
  return (
    <>
      <ItemDetail prodList={prodList} />
    </>
  );
}

export default ItemDetailContainer;
