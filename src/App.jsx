import { useState } from 'react'
import './App.css'
import PersonList from './components/PersonList'

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
            <PersonList people={people} setSelectedPerson={setSelectedPerson} />

            {selectedPerson && (
                <h2>{selectedPerson.name}</h2>
            )}
        </>
    )
}

export default App
