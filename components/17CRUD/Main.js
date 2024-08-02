import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";

import Criar from "./professor/Criar";
import Listar from "./professor/Listar";
import Editar from "./professor/Editar";
import CriarA from "./aluno/Criar";
import ListarA from "./aluno/Listar";
import EditarA from "./aluno/Editar";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <Home />,
            children: [
                {
                    path:"professor/listar",
                    element:<Listar />
                },
                {
                    path:"professor/criar",
                    element:<Criar />
                },
                {
                    path:"professor/editar",
                    element:<Editar />
                },
                {
                    path:"aluno/listar",
                    element:<ListarA />
                },
                {
                    path:"aluno/criar",
                    element:<CriarA />
                },
                {
                    path:"aluno/editar",
                    element:<EditarA />
                }
            ]
        }
    ]

)

const Main = () => {
    return (
        <RouterProvider router={router}/>
    )
}
export default Main