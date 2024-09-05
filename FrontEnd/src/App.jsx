import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [names, setNames] = useState([])
  useEffect(()=>{
    axios.get('/api/name')
    .then((response)=>{
      setNames(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  })
  return (
    <>
      
        <h1>Let's Code</h1>
        <p>NAMES:{names.length} </p>
    {
      names.map((name, index)=>(
        <div key={name.id}>
          <span style={{ marginRight: '8px' }}>{name.name}</span>
          <span>{name.age}</span>

        </div>
      ))
    }

    </>
  )
}

export default App
