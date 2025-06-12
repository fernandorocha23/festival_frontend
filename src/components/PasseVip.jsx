function PasseVip() {
    return (
        <article className="bilhete">
            <img id="bilhete3" src="/festival/bilhete3.jpg" alt="Destaques do Festival"
                 title="para os maiores VIP de sempre"/>
            <h3 className="bilhete-detalhes">Passe VIP - 90€</h3>
            <div className="botoes">
                <button className="menos">-</button>
                <h4 id="preco-vip">0</h4>
                <button className="mais">+</button>
            </div>
        </article>
    )
}

export default PasseVip;