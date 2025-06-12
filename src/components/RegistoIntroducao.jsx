import {useState} from "react";
import {useNavigate} from "react-router-dom";
import api from "../services/api.jsx";
import {toast} from "react-toastify";

function RegistoIntroducao() {

    const [inputs, setInputs] = useState({username:"", password:"", email:""});

    const navigate = useNavigate();

    const handleInput = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await api.post("/user", inputs);
            toast("Utilizador registado com sucesso!");
            navigate("/temp", { state: { data: response.data } });
        } catch (error) {
            console.error("Erro ao registar:", error);
            toast("Ocorreu um erro ao registar o utilizador.");
        }
    }

    return (
        <>
            <div className="festival-introducao">
                <h1>Registe-se para o Festival!</h1>
                <p className="form-introducao">Preencha os dados abaixo para ter acesso a notícias e conteúdo
                    exclusivo sobre o maior festival deste
                    verão!</p>
            </div>

            <form target="_blank" method="post" className="registo-formulario" onSubmit={handleSubmit}>
                <div className="form-container">
                    <div className="form-linha">
                        <div className="form-coluna">
                            <h3>Dados de Acesso</h3>

                            <div className="form-grupo">
                                <label htmlFor="username">Username:</label>
                                <input type="text" id="user" name="username" placeholder="Seu username"
                                onChange={handleInput}/>
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="pwd">Password:</label>
                                <input type="password" id="pwd" name="password" placeholder="Sua password"
                                onChange={handleInput}/>
                            </div>

                            <div className="form-grupo">
                                <label htmlFor="email">Email:</label>
                                <input type="email" id="email" name="email" placeholder="email@exemplo.com"
                                onChange={handleInput}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-submit">
                    <input id="botao-registo" type="submit" value="Registar"/>
                </div>
            </form>
        </>

    )
}

export default RegistoIntroducao;