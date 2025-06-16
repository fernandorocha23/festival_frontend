import "./assets/css/festivalstyle.css"
import Home from "./pages/Home.jsx";
import Cartaz from "./pages/Cartaz.jsx";
import Registo from "./pages/Registo.jsx";
import Tickets from "./pages/Tickets.jsx";
import newsInfo from "./assets/json/news.json"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Temporario from "./pages/Temporario.jsx";
import ArtistDetails from "./pages/ArtistDetails.jsx";
import Inquerito from "./pages/Inquerito.jsx";
import Result from "./pages/Result.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import UserProvider from "./services/UserContext.jsx";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import UserComments from "./pages/UserComments.jsx"
import {getAllArtists} from "./services/ArtistaService.jsx";
import {useEffect, useState} from "react";
import React from 'react';
import {ToastContainer} from "react-toastify";
import Profile from "./components/Profile.jsx";

function App() {

    const noticias = newsInfo["news"];

    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        const fetchArtists = async () => {
            const result = await getAllArtists();
            setArtistas(result);
        };
        fetchArtists();
    }, []);


    return (
        <>
            <ToastContainer/>
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Home news={noticias}/>}/>
                        <Route path="/cartaz" element={<Cartaz artists={artistas}/>}/>
                        <Route path="/registo" element={<Registo/>}/>
                        <Route path="/bilhetes" element={<ProtectedRoute><Tickets/></ProtectedRoute>}/>
                        <Route path="/temp" element={<Temporario/>}/>
                        <Route path="/artist" element={<ArtistDetails/>}/>
                        <Route path="/inquerito"
                               element={<ProtectedRoute><Inquerito artists={artistas}/></ProtectedRoute>}/>
                        <Route path="/user/comments" element={<UserComments/>}/>
                        <Route path="/result" element={<Result artists={artistas}/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
                    </Routes>
                </UserProvider>

            </BrowserRouter>
        </>
    )
}

export default App
