import { useContext } from 'react'
import './Night.css'
import { NightContext } from '../context/night'
import { RiMoonClearFill } from 'react-icons/ri';
import { BsSun } from 'react-icons/bs';




function Night() {

  const { night, setNight } = useContext(NightContext)

  return (
    <div className="nightContainer">
      {night ? (
        <div className='whiteMode' onClick={() => setNight((prevState) => !prevState)}>
          <RiMoonClearFill size={20} />
        </div>
      ) : (
        <div className='blackMode' onClick={() => setNight((prevState) => !prevState)}>
          <BsSun size={20} />

        </div>
      )}
    </div>
  )
}

export default Night