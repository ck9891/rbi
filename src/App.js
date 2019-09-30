import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'



const App = () => {
  const [menu, setMenu] = useState({})

  useEffect(() => {

    const fetchMenu = async () => {
      const menuResult = await fetch(
        `http://localhost:3001/api/menu`, {
        headers: new Headers({
          "Content-Type": "application/json"
        }
      })
      )
      .json()
      .then(res => console.log(res))
      .catch(err => console.log(err))
      // setMenu(menuResult)
    }

    fetchMenu()
  }, [])
  return (
    <Card />
  )
}

export default App
