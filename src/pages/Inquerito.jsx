import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import FormColuna2 from "../components/FormColuna2.jsx";
import InqueritoIntroducao from "../components/InqueritoIntroducao.jsx";

function Inquerito({artists}){
    return(
        <>
            <Header/>
            <div className={"general-container"}>
                <InqueritoIntroducao/>
                <FormColuna2 artists={artists}/>
            </div>
            <Footer/>
        </>
    )
}

export default Inquerito;