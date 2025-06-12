import {useNavigate} from "react-router-dom";
import {useState} from "react";

const FormColuna2 = ({artists}) => {

    const [artist, setArtist] = useState("");

    const navigate = useNavigate();

    const changeHandle = (e) => {
        setArtist(e.target.value);
    }
    const clickHandle = () => {
        const localVotes = localStorage.getItem("votos");
        let votos = {};
        if (localVotes)
            votos = JSON.parse(localVotes);
        if (artist) {
            if (votos[artist])
                votos[artist] += 1;
             else
                votos[artist] = 1;
            localStorage.setItem("votos", JSON.stringify(votos));
            navigate("/result", {state:{data: artist} });
        } else
            alert("Selecione um artista.");
    }

    return (
        <div className="form-coluna">
            <p>Selecione o seu artista favorito:</p>
            {artists.map((a) => (
                <div className="radio-group" key={a.artist.id}>
                    <input
                        onChange={changeHandle}
                        type="radio"
                        name="musicafav"
                        id={a.artist.id}
                        value={a.artist.name}
                    />
                    <label htmlFor={a.artist.id}>{a.artist.name}</label>
                </div>
            ))}

            <div className="form-submit">
                <input onClick={clickHandle} id="botao-registo" type="submit" value="Registar"/>
            </div>
        </div>
    )
}

export default FormColuna2;