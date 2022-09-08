import { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/CartWidget/carrito.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'
import Counter from './components/Counter/Counter';
import './components/Item/Item.css'


function App() {
  const stock = 5;
  const [und, setUnd] = useState(0);

  const sumar = () => und < stock ? setUnd(und + 1) : alert('PRODUCTO AGOTADO')
  const restar = () => und > 0 ? setUnd(und - 1) : alert('ERROR, minimo 1 unidad')

  return (
    <>

      <NavBar und={und} />
      <header className="header">
        <h2>Llego la hora de merendar!!</h2>
      </header>
     
        <ItemListContainer />
        <Counter stock={stock} sumar={sumar} restar={restar} />
      

    </>
  )
}
export default App;
