import {Link} from "react-router-dom";
import Navbar from "./Navbar.jsx";

const Header = () => {
    return (
        <header>
            <Navbar/>
            <div id="logo">
                <Link to="/">
                    <img src="/festival/sol_caparica.png" alt="Logo do Festival"/>
                </Link>
            </div>
        </header>
    )
}
export default Header;