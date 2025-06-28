import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useUserContext } from "../services/UserContext.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api.jsx";
import {toast} from "react-toastify";

function Profile() {
    const contexto = useUserContext();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        async function fetchProfile() {
            try {
                const perfis = await api.get(`/users/${contexto.user.id}/profile`);
                setProfile(perfis.data);
            } catch (error) {
                toast("Erro ao carregar perfil.");
            }
        }

        fetchProfile();
    }, [contexto.user.id]);

    const handleClick = () => {

    }

    return (
        <>
            <Header />
            <main className="general-container">
                <section className="perfil-card">
                    <h2>Olá, {profile ? profile?.firstName : contexto.user.username}!</h2>
                    {profile?.avatarImageUrl && (
                        <img src={profile?.avatarImageUrl} alt="Avatar" className="avatar-img" />
                    )}
                    <p><strong>Nome completo:</strong> {profile?.firstName} {profile?.lastName}</p>
                    <p><strong>Banda Favorita:</strong> {profile?.favoriteBand || "—"}</p>
                    <p><strong>Email:</strong> {contexto.user.email}</p>
                </section>
                <button onClick={handleClick}>Editar Perfil</button>
            </main>
            <Footer />
        </>
    );
}

export default Profile;