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

    // SUpprimer
    const handleDelete = (index) =>{
        console.log(index)
        allData.splice(index, 1)
        setAllData([...allData])
    }

    



    return(
        <div>
            <h1>CRUD Insert, Update and Delete</h1>
            <input value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <button onClick={handleAdd}>Add</button>
            
            <h2>Liste</h2>

                {allData.map((liste, index)=>(
                       <div className='liste' key={`${liste}-${index}`}>
                            <div className='name'>{liste}</div>
                            <button className='submit' onClick={handleEdit}>Edit</button>

                            <button className='submit' onClick={()=>{
                                handleDelete(index)
                            }}>Delete</button>
                       </div>
                ))}

        </div>
    )
}

export default Crud