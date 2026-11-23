function Person({ person, setSelectedPerson }) {
    return (
        <>
            <button className="person-button" onClick={() => {
                setSelectedPerson(person)
            }}>
                {person.name}
            </button>
        </>
    )
}

export default Person