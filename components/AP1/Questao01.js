const Questao01 = () => {

    const Questao01A = () => {

        const lista = [
            {a:10, b:3, c:7},
            {a:5, b:-3, c:9},
            {a:1, b:9, c: 40}
        ]

        return Questao01B({lista})

    }
    
    function Questao01B(props){
        
        //lógica para ver o maior número do primeiro obj json da lista
        var maiorA = props.lista[0].a

        if(maiorA < props.lista[0].b && props.lista[0].b < props.lista[0].c){
            maiorA = props.lista[0].c
        }

        else if(maiorA < props.lista[0].c && props.lista[0].c < props.lista[0].b){
            maiorA = props.lista[0].b
        }

        else if(maiorA < props.lista[0].c && props.lista[0].c > props.lista[0].b){
            maiorA = props.lista[0].c
        }

        //para ver o maior número do segundo obj json da lista
        var maiorB = props.lista[1].a

        if(maiorB < props.lista[1].b && props.lista[1].b < props.lista[1].c){
            maiorB = props.lista[1].c
        }

        else if(maiorB < props.lista[1].c && props.lista[1].c < props.lista[1].b){
            maiorB = props.lista[1].b
        }

        else if(maiorB < props.lista[1].c && props.lista[1].c > props.lista[1].b){
            maiorB = props.lista[1].c
        }

        //para ver o maior número do terceiro obj json da lista
        var maiorC = props.lista[2].a

        if(maiorC < props.lista[2].b && props.lista[2].b < props.lista[2].c){
            maiorC = props.lista[2].c
        }

        else if(maiorC < props.lista[2].c && props.lista[2].c < props.lista[2].b){
            maiorC = props.lista[2].b
        }

        else if(maiorC < props.lista[2].c && props.lista[2].c > props.lista[2].b){
            maiorC = props.lista[2].c
        }


        return(
            <div>
                <p>maior número do primeiro Obj Json: {maiorA}</p> 
                <p>maior número do segundo Obj Json: {maiorB}</p> 
                <p>maior número do terceiro Obj Json: {maiorC}</p>    
            </div>
        )


    }

    return(
        <div>
            <p>{Questao01A()}</p>
        </div>

    )

}

export default Questao01