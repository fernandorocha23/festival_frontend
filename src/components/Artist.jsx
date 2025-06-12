import {useNavigate} from "react-router-dom";

const Artist = (artist) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/artist", {state: {data: artist}});
    }

    return (
        <section className="artista-container">
            <div onClick={handleClick}>
            <article key={artist.id} className="artista">
                <div className="artista-img">
                    <img src={artist.image_path} alt={artist.name}/>
                </div>
                <div className="artista-informacoes">
                    <h3>{artist.name}</h3>
                    <p className="artista-descricao">{artist.short_bio}</p>
                </div>
            </article>
            </div>
        </section>
    )
}

export default Artist;