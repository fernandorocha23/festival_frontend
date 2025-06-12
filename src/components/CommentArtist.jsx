import api from "../services/api.jsx";
import {useEffect, useState} from "react";
import {useUserContext} from "../services/UserContext.jsx";
import {toast} from "react-toastify";

function CommentArtist(detalhes) {
    const contexto = useUserContext();
    const [likes, setLikes] = useState(detalhes.likes);
    const [liked, setLiked] = useState(false);

    const handleLike = async () => {
        if (!contexto.user) {
            toast("É necessário iniciar sessão para dar like.");
            return;
        }
        try {
            if (!liked) {
                const response = await api.post(`/comments/${detalhes.id}/like`);
                setLikes(response.data.likesCount);
                setLiked(true);
            } else {
                const response = await api.post(`/comments/${detalhes.id}/dislike`);
                setLikes(response.data.likesCount);
                setLiked(false);
            }

        } catch (e) {
            toast("Ocorreu um erro ao processar o seu like.");
            console.error("Erro ao dar like:", e);
        }
    };

    return (
        <div className="comentarios">
            <h3>Comentário de user {detalhes.username}</h3>
            <p>{detalhes.comment_text}</p>
            <div className="comment-footer">
                <small><em>{new Date(detalhes.pub_datetime).toLocaleString()}</em></small>
                <div className="like-row">
                    <span>{likes}</span>
                    <button type="button" onClick={handleLike}>{liked ? "\u2665" : "\u2661"}</button>
                </div>
            </div>
        </div>
    )
}

export default CommentArtist;