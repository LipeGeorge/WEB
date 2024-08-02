import alunos from "../data/db_aluno"
import "../css/crud.css"

const ListarA = () => {
    const renderizarAlunos = () => {
        const vetorAlunos = alunos.map(
            (alunos) => {
                return (
                    <tr>
                        <td scope="row">{alunos.nome}</td>
                        <td>{alunos.curso}</td>
                        <td>{alunos.ira}</td>
                        <td>
                            <div>
                                <button type="button" className="btn btn-secondary">Editar</button>
                                <button type="button" className="btn btn-danger">Apagar</button>
                            </div>
                        </td>
                    </tr>
                )
            }

        )
        return vetorAlunos
    }

    return (
        <div className="page-content">
            <h1>Listar Aluno</h1>
            <div className="table-content">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Curso</th>
                            <th scope="col">ira</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarAlunos()}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ListarA