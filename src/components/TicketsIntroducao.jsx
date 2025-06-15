import {useState} from "react";
import Bilhete from "./Bilhete.jsx";

function TicketsIntroducao() {
    const [preco, setPreco] = useState({passeDia: 0, passeFest: 0, passeVip: 0});
    const [mensagem, setMensagem] = useState("");

    const comprar = () => {
        if (preco.passeDia === 0 && preco.passeFest === 0 && preco.passeVip === 0) {
            setMensagem("Selecione pelo menos um bilhete");
        } else {
            setMensagem("Compra realizada com sucesso!");
        }
        setTimeout(() => setMensagem(""), 2000);
        setPreco({passeDia: 0, passeFest: 0, passeVip: 0});
    };

    const totalPreco = preco.passeDia * 25 + preco.passeFest * 70 + preco.passeVip * 90;

    return (
        <>
            <div className="festival-introducao">
                <h1>Bilheteira Oficial</h1>
                <p className="festival-slogan">Compre aqui os seus bilhetes para o melhor verão!</p>
            </div>
            <div className="bilhete-container">
                <Bilhete
                    titulo="Passe diário"
                    preco={25}
                    imagem="/festival/bilhete1.jpg"
                    quantidade={preco.passeDia}
                    setQuantidade={(q) => setPreco({...preco, passeDia: q})}
                />
                <Bilhete
                    titulo="Passe para o festival"
                    preco={70}
                    imagem="/festival/bilhete2.jpg"
                    quantidade={preco.passeFest}
                    setQuantidade={(q) => setPreco({...preco, passeFest: q})}
                />
                <Bilhete
                    titulo="Passe VIP"
                    preco={90}
                    imagem="/festival/bilhete3.jpg"
                    quantidade={preco.passeVip}
                    setQuantidade={(q) => setPreco({...preco, passeVip: q})}
                />
            </div>

            <article className="bilhete">
                {totalPreco > 0 && <h3 id="contador-preço">Preço Total: {totalPreco}€</h3>}
            </article>
            <p id="mensagem-compra">{mensagem}</p>
            <div className="form-submit">
                <input id="comprar" type="submit" value="Comprar" onClick={comprar}/>
            </div>
        </>
    );
}

export default TicketsIntroducao;