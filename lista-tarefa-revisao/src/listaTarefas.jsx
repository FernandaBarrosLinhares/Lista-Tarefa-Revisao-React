



function ListaTarefas(props){
   

    return(
        <>
        <ul className="lista-tarefas">
        {props.tarefas.length > 0 ? (
          props.tarefas.map((tarefa) => (
            <li key={tarefa.id} className={tarefa.realizada ? 'realizada' : ''}>
              <span onClick={() => props.onToggleRealizada(tarefa.id)}>{tarefa.descricao}</span>
            </li>
          ))
        ) : (
          <span>Sem tarefas adicionadas</span>
        )}
      </ul>
        
        </>
    )
}

export default ListaTarefas