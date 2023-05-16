import { useState } from 'react'
import './Item.css'
function Item(props) {

    const { data, set } = props
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(data.content)

    const handleDelete = () => {
        const id = data.id
        set(prevState => prevState.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const modificated = () => {
        return(
            <>
                    <p>{text}</p>

                    <div className='buttonContainer'>
                        <button className="editButton" onClick={()=> setEditing(true)}>Edit</button>
                        <button className="deleteButton" onClick={handleDelete}>Delete</button>
                    </div> 
                </>
        )}

        const noModificated = () => {
            return(
                <form className='form'>
                        <input className="inputItem" value={text} onChange={handleChange}></input>
                
                        <div className='buttonContainer'>
                            <button className="doneButton" onClick={()=>setEditing(false)}>Done</button>
                            <button className="backButton" onClick={()=>setEditing(false)}>Back</button>
                        </div>
                 </form>  
            )}

    return (
        <div className="itemContenedor">
            {editing ? noModificated() : (
                modificated()
            )}
        </div>
    )
}

export default Item