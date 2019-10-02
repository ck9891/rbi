import React from 'react'
import MenuProvider from './context/MenuContext'
import Menu from './components/Menu'



const App = () => {

  return (
    <MenuProvider>
    <>
    {/* <h1>{menuTitle}</h1> */}
    {/* need nav */}
    <Menu />

    </>
    </MenuProvider>


  )
}

export default App
