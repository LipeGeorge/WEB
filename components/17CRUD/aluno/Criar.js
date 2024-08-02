import "../css/crud.css"
import { useState } from "react"

const CriarA = () => {

    const [nomeA, setNomeA] = useState("")
    const [cursoA, setCursoA] = useState("")
    const [ira, setIra] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("\nNome: " + nomeA + "\nCurso: " + cursoA + "\nIRA: " + ira)
    }

    return(
        <div>
            <h1>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputNome">Nome</label>
                    <input
                        className="form-control"
                        type="text"
                        name="nome" //Ela casa o input com a variável. Dá o nome ao nome hehe
                        id="inputNome"
                        onChange={(event) => setNomeA(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputCurso">Curso</label>
                    <input
                        className="form-control"
                        type="text"
                        name="curso" //Ela casa o input com a variável. Dá o nome ao nome hehe
                        id="inputCurso"
                        onChange={(event) => setCursoA(event.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="inputIra">IRA</label>
                    <input
                        className="form-control"
                        type="number"
                        step="0.1"
                        name="ira" //Ela casa o input com a variável. Dá o nome ao nome hehe
                        id="inputIra"
                        onChange={(event) => setIra(event.target.value)}
                    />
                </div>
                <div className="mb-3" class="div-button-submit">
                    <button 
                        type="submit"
                        className="btn btn-primary"
                        style={{marginLeft:0}}
                    >
                        Submeter
                    </button>
                </div>
            </form>
        </div>
    );
}
export default CriarA