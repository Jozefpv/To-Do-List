import './App.css'
import Night from './components/Night'
import Form from './components/Form.jsx'
import { useContext, useEffect } from 'react'
import {NightContext} from './context/night.jsx'
function App() {
  const {night} = useContext(NightContext)

  useEffect(()=>{
    const htmlTag = document.querySelector('html');
    if(night===false){

      htmlTag.style.backgroundColor = 'black';
      htmlTag.style.color = 'white';
    }else if(night){
      htmlTag.style.backgroundColor = 'white';
      htmlTag.style.color = 'black';
    }
  }, [night])

  return (
    
      <div className={night ? 'padre' : 'testing'}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1>TO DO LIST📑</h1>
          <Night />
        </div>
        <Form />
      </div>
   
  )
}

export default App
