function Bilhete({ titulo, preco, imagem, quantidade, setQuantidade }) {
    return (
        <article className="bilhete">
            <img src={imagem} alt={titulo} />
            <h3 className="bilhete-detalhes">{titulo} - {preco}€</h3>
            <div className="botoes">
                <button className="menos" onClick={() => setQuantidade(Math.max(quantidade - 1, 0))}>-</button>
                <h4>{quantidade}</h4>
                <button className="mais" onClick={() => setQuantidade(quantidade + 1)}>+</button>
            </div>
        </article>
    );
}

export default Bilhete;