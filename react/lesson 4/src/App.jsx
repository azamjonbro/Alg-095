import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function App() {
  const [Javohir, setJavohir] = useState("")
  const [boolean, setBoolean] = useState(true)
  let date = new Date()
  let minutes = date.getMinutes()
  useEffect(() => {
    if(boolean){
      setJavohir("Hello Javohir")
    }
    else{
      setJavohir(`The current minutes is ${minutes}`)
    }
  }, [boolean])
  return (
    <div>
      {Javohir}

      <Link to="/salom">salom</Link>
      <button onClick={() => setBoolean(!boolean)}></button>
    </div>
  )
}

export default App