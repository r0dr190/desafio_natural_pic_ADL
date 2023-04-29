/* import { useContext } from "react"
 */import { Link } from "react-router-dom"
/* import { ContextProvider } from "../context/ContextProvider"
 */
export const NavBar = () => {

    /* const { RickAndMorty } = useContext(ContextProvider) */

    return(

        <nav className="navbar bg-dark">
            <div className="container-fluid ">
                <span className="navbar-brand mb-0 h1 text-white">Navbar</span>
                <Link to="/" className="text-white ms-3 text-decoration-none" /* onClick={() => RickAndMorty} */>
                    Home
                </Link>
                <Link to="/Favoritos" className="text-white ms-3 text-decoration-none">
                    Favoritos
                </Link>
            </div>
        </nav>
    )
}