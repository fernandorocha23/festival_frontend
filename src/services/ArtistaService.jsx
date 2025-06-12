
import api from "./api.jsx";

const getArtista = async (artist_id) => {

    let artist = await api.get("/artists/" + artist_id)
    return artist.data;
}

const getAllArtists = async () => {
    let artists = await api.get("/artists");
    return artists.data;
}

export {getArtista, getAllArtists};
