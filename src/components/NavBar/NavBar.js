import logotipo from '../img/logo.jpeg'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="navBar-container">
            <div>
                <img src={logotipo} className="logotipo" alt="logo" />
            </div>
            <div className='navBar'>
                <li><a href="">Inicio</a></li>
                <li><a href="">Menú</a></li>
                <li><a href="">Nosotros</a></li>
                <li><a href="">Registro</a></li>
                <div className='contador'><CartWidget /></div>
            </div>
        </div>
    );
};

export default NavBar;