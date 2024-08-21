const Questao02 = () => {

    const urlMostrar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"

    const Inverter = (mostrar, costas, frente) => {

        costas = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"

        mostrar = costas
        costas = frente
        frente = mostrar

        alert(mostrar)

        return(
            alert(mostrar)
        )

    }

    return (
        <div>
            <img
                src={urlMostrar}
                width={250}
            />
            <button
                onClick={
                    () => {
                        <Inverter/>
                    }
                }
            >
                Inverter
            </button>
        </div>
    )

}

export default Questao02