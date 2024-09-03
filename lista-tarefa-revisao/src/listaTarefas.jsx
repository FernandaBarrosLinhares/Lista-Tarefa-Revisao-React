



function ListaTarefas(props){
   

    return(
        <>
        
        <ul>
           {props.tarefas.length>0  && 
           (
            props.tarefas.map(tarefa=>
            (
                <li key={ tarefa.id}> {tarefa.descricao}</li>
            
            ))
        )||(
            <span>Sem tarefas adicionadas </span>
        )}

        </ul>
        </>
    )
}

export default ListaTarefas