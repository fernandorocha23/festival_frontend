
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import Artist from "../components/Artist.jsx";

function Cartaz({artists}) {
    return (
        <>
            <Header/>
            <main className="general-container">
                <div className="festival-introducao">
                    <h1>Cartaz Oficial</h1>
                    <p className="festival-slogan">Confira aqui os artistas confirmados para o Sol da Caparica 2025!</p>
                </div>
                {artists.map( (a, index) => <Artist
                    key={index}
                    id={a.artist.id}
                    name={a.artist.name}
                    performance_date={a.performanceDate}
                    performance_hour={a.performanceTime}
                    image_path={a.artist.imagePath}
                    video_url={a.artist.videoUrl}
                    short_bio={a.artist.shortBio}
                    music_style={a.artist.musicStyle}
                />)}
            </main>
            <Footer/>
        </>
    )
}

export default Cartaz;