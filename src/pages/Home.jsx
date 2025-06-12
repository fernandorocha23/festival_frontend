import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import NewsArticle from "../components/NewsArticle.jsx";
import Countdown from "../components/Countdown.jsx";
import HomeIntroducao from "../components/HomeIntroducao.jsx";
import HomeRegisto from "../components/HomeRegisto.jsx";
import News from "../components/News.jsx";
import HomeSlideShow from "../components/HomeSlideShow.jsx";



function Home({news}) {

    return (
        <>
            <Header/>
            <main className={"general-container"}>
                <HomeIntroducao/>
                <Countdown/>
                <HomeSlideShow/>
                <News news={news}/>
                <HomeRegisto/>
            </main>
            <Footer/>
        </>
    )
}
export default Home;