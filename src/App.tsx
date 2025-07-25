
import './App.css'
import { adicionarLista, removerLista } from './utils/lista'
import { useState } from 'react'

function App() {
  const [tarefas, setTarefas] = useState<string[]>([])
  const [novaTarefa, setNovaTarefa] = useState('')

  const handleAdicionar = () => {
    if (novaTarefa.trim() !== '') {
      setTarefas(adicionarLista(tarefas, novaTarefa))
      setNovaTarefa('')
    }
  }

  const handleRemover = (indice: number) => {
    setTarefas(removerLista(tarefas, indice))
  }
  return (
    <>
      <div className="container">
        <h1>Lista de Tarefas</h1>
        <div className="adicionar-tarefa">
          <input
            type="text"
            value={novaTarefa}
            onChange={e => setNovaTarefa(e.target.value)}
            placeholder="Digite uma nova tarefa"
          />
          <button onClick={handleAdicionar}>Adicionar</button>
        </div>
        <ul className="lista-tarefas">
          {tarefas.map((tarefa, indice) => (
            <li key={indice}>
              {tarefa}
              <button onClick={() => handleRemover(indice)}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
