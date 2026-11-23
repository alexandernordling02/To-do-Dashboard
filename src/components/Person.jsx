function Person({ person, setSelectedPerson }) {
    return (
        <>
            <button onClick={() => {
                setSelectedPerson(person)
            }}>
                {person.name}
            </button>
        </>
    )
}

export default Person