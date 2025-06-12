import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link, useLocation} from "react-router-dom";

function Result({artists}) {
    const location = useLocation();
    const dados = location.state.data;

    function lerVotos() {
        const guardado = localStorage.getItem("votos");
        return guardado ? JSON.parse(guardado) : {};
    }

    const votos = lerVotos();

    return (
        <>
            <Header/>
            <div className={"general-container"}>
                <div className={"results-container"}>
                    <div className={"artista-fav"}>O teu artista favorito: {dados}</div>
                    <h2>Resultados acumulados:</h2>
                    <ul className={"resultados-lista"}>
                        {artists.map((a) => {
                            const contagemVotos = votos[a.artist.name] || 0;
                            return (
                                <li key={a.artist.id} className={"result"}>
                                    {a.artist.name}: {contagemVotos} votos
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <Link to="/" className="travel-link">
                    Voltar para a página inicial
                </Link>
            </div>
            <Footer/>
        </>
    )
}

export default Result;