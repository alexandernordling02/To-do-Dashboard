import { useState } from 'react'
import './App.css'
import PersonList from './components/PersonList'
import TodoList from './components/TodoList'

const people =
    [{
        id: 1,
        name: "Alexander",
        todos: ["Spela GTA 6", "Tvätta bilen", "Gymma"]
    }, {
        id: 2,
        name: "David",
        todos: ["Spela WoW", "Köpa ny bil", "Bada"]
    }, {
        id: 3,
        name: "Johan",
        todos: ["Plugga", "Kolla hockey", "Gymma"]
    }, {
        id: 4,
        name: "Josefin",
        todos: ["Kolla tiktok", "Shoppa", "Kela med Leo"]
    }, {
        id: 5,
        name: "Leo",
        todos: ["Sova", "Äta mat", "Busa"]
    }]


function App() {

    const [selectedPerson, setSelectedPerson] = useState(null)

    return (
        <>
            <h1 className="dashboard-title">Todo Dashboard</h1>
            <PersonList people={people} setSelectedPerson={setSelectedPerson} selectedPerson={selectedPerson} />

            {selectedPerson && (
                <div className="todo-container">
                    <div className="todo-header">
                        <h2 className="selected-name">{selectedPerson.name}</h2>
                        <span className="todo-count">
                            {selectedPerson.todos.length} uppgifter
                        </span>
                    </div>
                    <TodoList todos={selectedPerson.todos} />
                </div>
            )}
        </>
    )
}

export default App
