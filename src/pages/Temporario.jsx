import HomeIntroducao from "../components/HomeIntroducao.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link, useLocation} from "react-router-dom";

function Temporario() {
    const location = useLocation();
    const dados = location.state.data;
    return (
        <>
            <Header/>
            <HomeIntroducao/>
            <main className={"general-container"}>
                <section className={"success-card"}>
                    <h2>Registo concluído!</h2>
                    <p>Bem-vindo(a), <strong>{dados.username}</strong>!</p>
                    <p>Irás receber um email de boas-vindas em <strong>{dados.email}</strong>.</p>
                </section>
                <Link to="/login" className="travel-link">
                    Efetue aqui o seu login!
                </Link>
            </main>

            <Footer/>
        </>
    )
}

export default Temporario;