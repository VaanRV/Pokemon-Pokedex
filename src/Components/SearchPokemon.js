import '../Styles/SearchPokemon.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const SearchPokemon = () => {
    return(
        <div className="search-bar-section">
            <input type="text" className="search-bar"  placeholder="Buscador"/>
            <i className="bi bi-search search-image"></i>
        </div>
    )
}

export default SearchPokemon;