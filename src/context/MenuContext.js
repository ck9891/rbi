import React, {useEffect, useState} from 'react'
import axios from 'axios'

const MenuContext = React.createContext()



const MenuProvider = (props) => {
  const [menuSection, setMenuSection] = useState({})
  const [menuTitle, setTitle] = useState('')

  useEffect(() => {

    const fetchMenu = async () => {
      axios.get(`/api/menu`
      ).then(res => {
        console.log(res.data)
        const menuData = res.data
        const title = menuData.name.en
        const section = menuData.options
        setMenuSection(section)
        setTitle(title)
      }
      )
        .catch(err => console.log(err))

      // setMenuSection(menuResult)
    }

    fetchMenu();
  }, [])

  return (
    <MenuContext.Provider
    value={
      {
        sections: menuSection,
      }
    }
    >
      {props.children}
    </MenuContext.Provider>
  )
}

export default MenuProvider
