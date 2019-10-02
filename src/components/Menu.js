import React from 'react'
import MenuProvider from '../context/MenuContext'
import Card from '../components/Card'

const Menu = (test) => {
  return ( <MenuProvider.Consumer>
    {section => (
        section.map(carID => (
          // <Card
          //   id={carID}
          //   section={section._key}
          // />
          console.log(section)
        ))
   )}
  </MenuProvider.Consumer>)
}


export default Menu
