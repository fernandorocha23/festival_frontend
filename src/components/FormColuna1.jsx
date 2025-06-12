function FormColuna1() {
    return (
        <div className="form-coluna">
            <h3>Dados de Acesso</h3>

            <div className="form-grupo">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="Seu username"/>
            </div>

            <div className="form-grupo">
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="pwd" placeholder="Sua password"/>
            </div>

            <div className="form-grupo">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="email@exemplo.com"/>
            </div>
        </div>
    )
}

export default FormColuna1;