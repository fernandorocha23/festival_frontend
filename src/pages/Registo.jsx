import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import RegistoIntroducao from "../components/RegistoIntroducao.jsx";
import FormColuna1 from "../components/FormColuna1.jsx";
import FormSubmit from "../components/FormSubmit.jsx";
import FormComentarios from "../components/FormComentarios.jsx";
import FormColuna2 from "../components/FormColuna2.jsx";

function Registo(){
    return(
        <>
            <Header/>
            <main className={"general-container"}>
                <RegistoIntroducao/>
            </main>
            <Footer/>
        </>
    )
}

export default Registo;