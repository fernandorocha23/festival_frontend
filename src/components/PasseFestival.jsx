function PasseFestival() {
    return (
        <article className="bilhete">
            <img id="bilhete2" src="/festival/bilhete2.jpg" alt="Destaques do Festival"
                 title="aproveita esta oportunidade"/>
            <h3 className="bilhete-detalhes">Passe para o festival - 70€</h3>
            <div className="botoes">
                <button className="menos">-</button>
                <h4 id="preco-passe">0</h4>
                <button className="mais">+</button>
            </div>
        </article>
    )
}
export default PasseFestival;