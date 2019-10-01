import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Card from './components/Card'



const App = () => {
  const [menu, setMenu] = useState({})

  useEffect(() => {

    const fetchMenu = async () => {

      axios.get(`/api/menu`,
        ).then(res => console.log(res.data))
        .catch(err => console.log(err))

      // setMenu(menuResult)
    }

      fetchMenu();
  }, [])
  return (
    <Card />
  )
}

export default App
