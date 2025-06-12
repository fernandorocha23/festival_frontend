import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import TicketsIntroducao from "../components/TicketsIntroducao.jsx";
import PasseDiario from "../components/PasseDiario.jsx";
import PasseFestival from "../components/PasseFestival.jsx";
import PasseVip from "../components/PasseVip.jsx";
import CounterTickets from "../components/CounterTickets.jsx";

function Tickets() {
    return (
        <>
            <Header/>
            <main className={"general-container"}>
                <TicketsIntroducao/>
            </main>
            <Footer/>
        </>
    )
}

export default Tickets;