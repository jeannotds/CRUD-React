import { useState } from 'react'
import '../styles/Crud.css'


const Crud = () =>{
    const [name, setName] = useState("")

    const [allData, setAllData] = useState([])

    const handleAdd = (e) =>{
        e.preventDefault()
        if(name.length != 0){
            setAllData(
                newData => [...newData, name]
            )
            setName("")
        }
        else{
            alert('Remplir le formulaire !')
        }
    }
    // console.log(allData)

    return(
        <div>
            <h1>CRUD Insert, Update and Delete</h1>
            <input value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button onClick={handleAdd}>Add</button>
            

            <div>
                {allData.map((liste)=>(
                    <div key={liste}>{liste}</div>
                ))}
            </div>
        </div>
    )
}

export default Crud