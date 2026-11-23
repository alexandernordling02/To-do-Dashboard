function Person({ person, setSelectedPerson, selectedPerson }) {
    return (
        <>
            <button className={selectedPerson?.id === person.id ? "person-button active" : "person-button"} onClick={() => {
                setSelectedPerson(person)
            }}>
                {person.name}
            </button>
        </>
    )
}

export default Person