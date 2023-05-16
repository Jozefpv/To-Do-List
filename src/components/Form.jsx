import { useState } from "react"
import './Form.css'
import Item from "./Item"
import { v4 as uuidv4 } from 'uuid';
function Form() {
    const [data, setData] = useState('')
    const [list, setList] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (data.length) {
            const newTarea = {
                id: uuidv4(),
                content: data
            }
            list === null ? setList([newTarea]) : setList(prevState => [newTarea, ...prevState])
            setData('')
        }
    }

    const handleChange = (e) => {
        setData(e.target.value)
    }

    return (
        <div>
            <p className="titleInput">Introduce una tarea:</p>
            <form className="formContent" onSubmit={handleSubmit}>
                <input className="inputPrincipal" placeholder="Cocinar..." type='text' name="tarea" value={data} onChange={(event => handleChange(event))} />
                <button className="addButton">Add</button>
                <p style={{position:"relative", transform: "translate(100px, 0px)"}}>Total: {list === null ? 0 : list.length}</p>
            </form>
            {console.log(list)}
            {list && (
                list.map((item) => {
                    return (
                        <div key={item.id} className="tareasContainer">
                            <Item set={setList} data={item} />
                        </div>
                    )
                })
            )}
        </div>
    )
}

export default Form