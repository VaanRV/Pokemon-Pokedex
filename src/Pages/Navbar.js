import '../Styles/Navbar.css';
import logoPokemon from '../Image/logo_poke.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-content'>
                <div>
                    <Link to="/">
                        <img src={logoPokemon} alt="Logo Pokemon" height={90} width={200} />
                    </Link>
                </div>
                <div>
                    <Link to="/pokedex">Pokedex</Link>
                </div>
            </div>
        </div>

    );
}