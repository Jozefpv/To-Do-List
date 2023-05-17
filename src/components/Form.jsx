import { useContext, useEffect, useState } from "react"
import './Form.css'
import Item from "./Item"
import { v4 as uuidv4 } from 'uuid';
import { NightContext } from "../context/night";
function Form() {
    const [data, setData] = useState('')
    const [list, setList] = useState(null)
    const [doneTask, setDoneTask] = useState(null)
    const { night } = useContext(NightContext)

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

    useEffect(() => {
        if (list === null) {
            const lsList = JSON.parse(localStorage.getItem('list'));
            if (lsList) {
                setList(lsList);
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list]);

    return (
        <>
            <div>
                <p className="titleInput">Introduce una tarea:</p>
                <form className="formContent" onSubmit={handleSubmit}>
                    <input className={night ? "inputPrincipalWhite" : "inputPrincipal"} placeholder="Cocinar..." type='text' name="tarea" value={data} onChange={(event => handleChange(event))} />
                    <button className={night ? "addButtonWhite" : "addButton"}>Add</button>
                    <button className={night ? "clearButtonWhite" : "clearButton"} onClick={() => setList('')}>Clear</button>
                    <p className="totalText">Total: {list === null ? 0 : list.length}</p>
                </form>
                {list && (
                    <div className="scrollContainer">
                        {list.map((item) => {
                            return (
                                <div key={item.id} className="tareasContainer">
                                    <Item done={setDoneTask} set={setList} data={item} />
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>
            {doneTask !== null && doneTask !== "" ? (
                <div style={{ marginTop: "50px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h4>Done tasks✅</h4>
                        <button className={night ? "clearButtonWhite" : "clearButton"} onClick={() => setDoneTask(null)}>Clear</button>
                    </div>
                    {console.log(doneTask)}
                    <ul>
                        {doneTask.map(item => {
                            return (
                                <li key={item.id}>
                                    <p>{item.content}</p>
                                </li>
                            )
                        })}
                    </ul>
                </div>) : (
                <div>

                </div>
            )}
        </>
    )
}

export default Form