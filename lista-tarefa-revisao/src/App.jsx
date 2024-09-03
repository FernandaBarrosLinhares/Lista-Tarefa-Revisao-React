import { useState, useEffect } from 'react'
import ListaTarefas from './listaTarefas'
import './lista.css'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('');

  useEffect(() => {
    const tarefasSalvas = JSON.parse(localStorage.getItem('tarefas'));
    if (tarefasSalvas) {
      setTarefas(tarefasSalvas);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      const nova = { id: Date.now(), descricao: novaTarefa };
      setTarefas([...tarefas, nova]);
      setNovaTarefa(''); // Limpa o input após adicionar a tarefa
    }
  };


  return (
    <>
       <h1>Lista de Tarefas</h1>
      <input
        type="text"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
        placeholder="Digite uma nova tarefa"
      />
      <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      <ListaTarefas tarefas={tarefas} />
    
    </>
  )
}

export default App
