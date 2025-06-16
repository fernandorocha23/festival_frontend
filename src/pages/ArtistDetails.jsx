import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {Link, useLocation} from "react-router-dom";
import CommentArtist from "../components/CommentArtist.jsx";
import {useEffect, useState} from "react";
import api from "../services/api.jsx";
import {toast} from "react-toastify";
import {useUserContext} from "../services/UserContext.jsx";

function ArtistDetails() {

    const contexto = useUserContext();

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const location = useLocation();
    const dados = location.state.data;

    useEffect(() => {
        async function fetchComments() {
            try {
                const comentarios = await api.get(`/artists/${dados.id}/comments`);
                setComments(comentarios.data);
            } catch (error) {
                toast("Erro ao carregar comentários.");
            }
        }

        fetchComments();
    }, [dados.id]);

    const handleInput = (e) => {
        setNewComment(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!newComment.trim()) {
            toast("Comentário não pode estar vazio.");
            return;
        }

        try {
            let body = new FormData();
            body.set("commentText", newComment)
            const response = await api.post(`/artists/${dados.id}/comments`, body);

            setComments([...comments, response.data]);
            setNewComment("");

        } catch (e) {
            toast("Erro ao adicionar um comentário.");
        }
    }

    return (
        <>
            <Header/>
            <main className={"artista-detalhes-container"}>
                <div className="artista-card">
                    <img src={dados.image_path} alt={dados.name}/>
                    <div className="artist-info">
                        <h1 className={"artista-nome"}>{dados.name}</h1>
                        <p className="artist-bio">{dados.short_bio}</p>
                        <div className={"performance-info"}>
                            <p><strong>Género:</strong>{dados.music_style}</p>
                            <p><strong>Data da performance:</strong> {dados.performance_date} - {dados.performance_hour}
                            </p>
                            <p><strong>Palco:</strong> Principal</p>
                            <p><strong>Spotify:</strong>
                                <Link to={dados.video_url} target="_blank"> Carregue aqui para ouvir no Spotify</Link>
                            </p>
                        </div>
                    </div>
                </div>
                <section className="comment-section">
                    <h2>Comentários sobre o artista</h2>
                    <div className="comments-list">
                        {comments.map((c, index) => {
                            return (
                                <CommentArtist
                                    key={index}
                                    id={c.id}
                                    username={c.userName}
                                    comment_text={c.commentText}
                                    pub_datetime={c.dateTime}
                                    likes={c.likesCount}
                                    usersLiked={c.usersLiked}
                                />
                            );
                        })}
                    </div>
                </section>

                {contexto.user ? (
                    <form onSubmit={handleSubmit}>
                        <section className="comentarios">
                            <h3>Deixe aqui o seu Comentário</h3>
                            <div className="form-grupo">
                                <label htmlFor="comentarios">Comentário sobre o artista:</label>
                                <textarea
                                    name="comentarios"
                                    id="comentarios"
                                    value={newComment}
                                    placeholder="Compartilhe suas expectativas, sugestões ou dúvidas sobre o festival..."
                                    onChange={handleInput}
                                ></textarea>
                            </div>
                            <input type="submit" value="Comentar"/>
                        </section>
                    </form>
                ) : (
                    <section className="comentarios">
                        <h3>Deixe aqui o seu Comentário</h3>
                        <p>
                            <Link to="/login" className="travel-link">
                                Efetue o login para adicionar um comentário
                            </Link>
                        </p>
                    </section>
                )}
            </main>
            <Footer/>
        </>
    )
}

export default ArtistDetails;