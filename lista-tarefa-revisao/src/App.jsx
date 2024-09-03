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
      setNovaTarefa(''); 
    }
  };
  const toggleTarefaRealizada = (id) => {
    const novasTarefas = tarefas.map((tarefa) =>
      tarefa.id === id ? { ...tarefa, realizada: !tarefa.realizada } : tarefa
    );
    setTarefas(novasTarefas);
  };

  return (

    <div className="container">
      <h1>Lista de Tarefas</h1>
      <div className="input-container">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Digite uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>
      <ListaTarefas tarefas={tarefas} onToggleRealizada={toggleTarefaRealizada} />
    </div>
    
  )
}

export default App
