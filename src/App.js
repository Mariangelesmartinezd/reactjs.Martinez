
import NavBar from './components/NavBar/NavBar';
import './components/NavBar/NavBar.css';
import './components/CartWidget/carrito.css';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/ItemListContainer/ItemListContainer.css'

import './components/Item/Item.css'



function App() {
  

  return (
    <>

      <NavBar/>
      <header className="header">
        <h2>Llegó la hora de merendar!!</h2>
      </header>
       <main>
        <ItemDetailContainer/>
       
       </main>
        
        
      </>
  )
}
export default App;
