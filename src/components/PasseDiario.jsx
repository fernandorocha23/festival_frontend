function PasseDiario() {
    return (
        <article className="bilhete">
            <img id="bilhete1" src="/festival/bilhete1.jpg" alt="Destaques do Festival" title="não percas nem por nada!"/>
            <h3 className="bilhete-detalhes">Passe diário - 25€</h3>
            <div className="botoes">
                <button className="menos">-</button>
                <h4 id="preco-dia">0</h4>
                <button className="mais">+</button>
            </div>
        </article>
    )
}

export default PasseDiario;