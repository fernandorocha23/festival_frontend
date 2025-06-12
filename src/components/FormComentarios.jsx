function FormComentarios() {
    return(
        <section className="comentarios">
            <h3>Deixe aqui o seu Comentário</h3>
            <div className="form-grupo">
                <label htmlFor="comentarios">Comentários adicionais sobre o festival:</label>
                <textarea name="comentarios" id="comentarios"
                          placeholder="Compartilhe suas expectativas, sugestões ou dúvidas sobre o festival..."></textarea>
                <p id="moderar"></p>
            </div>
        </section>
    )
}

export default FormComentarios;