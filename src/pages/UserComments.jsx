import {useUserContext} from "../services/UserContext.jsx";
import {useEffect, useState} from "react";
import api from "../services/api.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const UserComments = () =>{

    const [comments, setComments] = useState([]);
    const contexto = useUserContext();

    useEffect(() => {
        async function fetchArtists() {
            let comentarios = await api.get("/user/comments")
            setComments(comentarios.data);
        }
        fetchArtists();
    }, []);

    return(
        <>
            <Header/>
            <main className={"general-container"}>
                <div className={"comment-section"}>
                    <h3>Comentarios de {contexto.user.username}</h3>
                    <p className="form-introducao">
                        Aqui podes rever os teus comentários feitos aos artistas do festival. Acompanha o que disseste, quando disseste e quantos likes recebeste!
                    </p>
                    <ul className={"comments-list"}>
                        {comments.map((comment) => (
                            <li key={comment.id} className={"comentarios"}>
                                <p><strong>Artista</strong>: {comment.artistName}</p>
                                <p>{comment.commentText}</p>
                                <p><small><em>{new Date(comment.dateTime).toLocaleString()}</em></small> | Likes: {comment.likesCount}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer/>
        </>


    )
}
export default UserComments;