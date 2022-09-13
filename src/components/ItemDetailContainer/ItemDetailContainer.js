import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";

const articule =  {id: '10', nombre: "Red Velvet Cookie and cream", tipo: "Cookies", cantidad: 1, desc: "Deliciosa cookie  de red velvet con chocolate blanco, cookies de vainilla, rellena de cheesecake cream, recién horneada dorada por fuera y húmeda por dentro", precio: 340, img: 'https://i.pinimg.com/236x/1a/ea/d2/1aead2a6dd9518a6abf03b251a878190.jpg'};

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  useEffect(() => {
    getDetail.then((response) => {
      setDetail(response)
    });
  }, []);

  const getDetail = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(articule)
    }, 2000);
  })

  return (
    <>
      <ItemDetail detail={detail}/>
    </>
  );
}

export default ItemDetailContainer;
