const CounterTickets = () => {
    return(
        <>
            <article className="bilhete">
                <h3 id="contador-preço" style={{display: "none"}}>Preço Total: 0€</h3>
            </article>
            <p id="mensagem-compra"></p>
            <div className="form-submit">
                <input id="comprar" type="submit" value="Comprar"/>
            </div>
        </>
    )
}

export default CounterTickets;