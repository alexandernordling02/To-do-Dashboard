import Person from "./Person"

function PersonList({ people, setSelectedPerson, selectedPerson }) {
    return (
        <div className="person-list">
            {people.map((person) => {
                return (
                    <Person key={person.id} person={person} setSelectedPerson={setSelectedPerson} selectedPerson={selectedPerson} />
                )
            })}
        </div>
    )
}

export default PersonList