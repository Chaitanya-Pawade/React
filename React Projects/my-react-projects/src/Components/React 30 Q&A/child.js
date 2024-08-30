




export default function Child({name , changeName}){

    return(
        <>
        <h2>{name}</h2>
        <button onClick={() => changeName("Ashok")}>Change Name</button>
        </>
    )
}