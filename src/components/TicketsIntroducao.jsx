import {useState} from "react";


function TicketsIntroducao() {

    const [preco, setPreco] = useState({passeDia: 0, passeFest: 0, passeVip:0});
    const [mensagem, setMensagem] = useState("");

    const comprar = () => {
        if (preco.passeDia === 0 && preco.passeFest === 0 && preco.passeVip === 0){
             setMensagem("Selecione pelo menos um bilhete");
        } else
            setMensagem("Compra realizada com sucesso!");
        setTimeout(() => setMensagem(""), 2000);
        setPreco({passeDia: 0, passeFest: 0, passeVip: 0})
    }

    const totalPreco = preco.passeDia * 25 + preco.passeFest * 70 + preco.passeVip * 90;

    return (
        <>
            <div className="festival-introducao">
                <h1>Bilheteira Oficial</h1>
                <p className="festival-slogan">Compre aqui os seus bilhetes para o melhor verão!</p>
            </div>
            <div className="bilhete-container">
                <article className="bilhete">
                    <img id="bilhete1" src="/festival/bilhete1.jpg" alt="Destaques do Festival" title="não percas nem por nada!"/>
                    <h3 className="bilhete-detalhes">Passe diário - 25€</h3>
                    <div className="botoes">
                        <button className="menos" onClick={() => setPreco(
                            {...preco, passeDia: preco.passeDia - 1 < 0 ? 0 : preco.passeDia - 1})}>-</button>
                        <h4 id="preco-dia">{preco.passeDia}</h4>
                        <button className="mais" onClick={() => setPreco(
                            {...preco, passeDia: preco.passeDia + 1})}>+</button>
                    </div>
                </article>
                <article className="bilhete">
                    <img id="bilhete2" src="/festival/bilhete2.jpg" alt="Destaques do Festival"
                         title="aproveita esta oportunidade"/>
                    <h3 className="bilhete-detalhes">Passe para o festival - 70€</h3>
                    <div className="botoes">
                        <button className="menos" onClick={() => setPreco(
                            {...preco, passeFest: preco.passeFest - 1 < 0 ? 0 : preco.passeFest -1})}>-</button>
                        <h4 id="preco-passe">{preco.passeFest}</h4>
                        <button className="mais" onClick={() => setPreco(
                            {...preco, passeFest: preco.passeFest + 1})}>+</button>
                    </div>
                </article>
                <article className="bilhete">
                    <img id="bilhete3" src="/festival/bilhete3.jpg" alt="Destaques do Festival"
                         title="para os maiores VIP de sempre"/>
                    <h3 className="bilhete-detalhes">Passe VIP - 90€</h3>
                    <div className="botoes">
                        <button className="menos" onClick={() => setPreco(
                            {...preco, passeVip: preco.passeVip - 1 < 0 ? 0 : preco.passeVip -1})}>-</button>
                        <h4 id="preco-vip">{preco.passeVip}</h4>
                        <button className="mais" onClick={() => setPreco(
                            {...preco, passeVip: preco.passeVip + 1})}>+</button>
                    </div>
                </article>
            </div>
            <article className="bilhete">
                {totalPreco > 0 && <h3 id="contador-preço">Preço Total: {totalPreco}€</h3>}
            </article>
            <p id="mensagem-compra">{mensagem}</p>
            <div className="form-submit">
                <input id="comprar" type="submit" value="Comprar" onClick={comprar}/>
            </div>
        </>

    )
}
export default TicketsIntroducao;