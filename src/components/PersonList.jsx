import Person from "./Person"

function PersonList({ people, setSelectedPerson }) {
    return (
        <>
            {people.map((person) => {
                return (
                    <Person key={person.id} person={person} setSelectedPerson={setSelectedPerson} />
                )
            })}
        </>
    )
}

export default PersonList