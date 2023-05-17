import { useContext, useState } from 'react'
import './Item.css'
import { NightContext } from '../context/night'
function Item(props) {

    const { done, data, set } = props
    const [editing, setEditing] = useState(false)
    const [text, setText] = useState(data.content)
    const { night } = useContext(NightContext)

    const handleDelete = () => {
        const id = data.id
        set(prevState => prevState.filter(item => item.id !== id))
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleDone = () => {
        done((prevState) => {
            const newDone = {
                id: data.id,
                content: text
            }
            if (prevState === null) {
               return [newDone]
            } else {
               return [newDone, ...prevState]
            }
        }
        )
        set(prevState => prevState.filter(item => item.id !== data.id))
    }

    const modificated = () => {
        return (
            <>
                <p>{text}</p>

                <div className='buttonContainer'>
                    <button className={night ? "editButtonWhite" : "editButton"} onClick={() => setEditing(true)}>Edit</button>
                    <button className={night ? "deleteButtonWhite" : "deleteButton"} onClick={handleDelete}>Delete</button>
                    <button className={night ? "doneButtonWhite" : "doneButton"} onClick={handleDone}>Done</button>
                </div>
            </>
        )
    }

    const noModificated = () => {
        return (
            <form className='form'>
                <input className={night ? "inputItemWhite" : "inputItem"} value={text} onChange={handleChange}></input>

                <div className='buttonContainer'>
                    <button className={night ? "doneButtonWhite" : "doneButton"} onClick={() => setEditing(false)}>Done</button>
                    <button className={night ? "backButtonWhite" : "backButton"} onClick={() => setEditing(false)}>Back</button>
                </div>
            </form>
        )
    }

    return (
        <div className={night ? "itemContenedorWhite" : "itemContenedor"}>
            {editing ? noModificated() : (
                modificated()
            )}
        </div>
    )
}

export default Item