import {Link} from "react-router-dom";
import {useUserContext} from "../services/UserContext.jsx";
function Navbar(){
    const contexto = useUserContext();
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cartaz">Cartaz</Link></li>
                    <li><Link to="/bilhetes">Bilheteira</Link></li>
                    <li><Link to="/inquerito">Inquérito</Link></li>
                    {!contexto.user ? (
                        <li><Link to="/login">Login</Link></li>
                    ) : (
                        <>
                            <li><Link to="/profile">Perfil</Link></li>
                            <li><button onClick={contexto.logout}>Logout</button></li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;