import api from "../services/api.jsx";
import {useState} from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useUserContext} from "../services/UserContext.jsx";
import {Link, useNavigate} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const contexto = useUserContext();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        const body = new FormData();
        body.set("username", username);
        body.set("password", password);

        try {
            await api.post("/login", body);

            let user = (await api.get("/user/logado")).data;
            contexto.setUser(user);
            navigate("/");

        } catch (error){
            console.error("Erro no login:", error);
            toast("Utilizador não encontrado!");
        }

    }
    return (
        <>
            <Header/>
            <main className={"general-container"}>
                <h2>Bem vindo(a) de volta!</h2>
                <form onSubmit={handleSubmit} className={"registo-formulario"}>
                    <div className={"form-container"}>
                        <div className={"form-linha"}>
                            <div className={"form-coluna"}>
                                <h3>Dados de Acesso</h3>

                                <div className={"form-grupo"}>
                                    <label htmlFor={"username"}>Username:</label>
                                    <input type="text" id="username" value={username} placeholder="Username" required
                           onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className={"form-grupo"}>
                    <input type="password" id="password" value={password} placeholder="Password" required
                           onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="form-submit">
                    <input type="submit" value={"login"}></input>
                    </div>
                </form>

                <Link to="/registo" className="travel-link">
                    Ainda não possui uma conta? Registe-se aqui
                </Link>
            </main>
        <Footer/>
        </>
    )
}


export default LoginPage;