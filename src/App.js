import React from 'react'
import MenuProvider from './context/MenuContext'
// import Menu from './components/Menu'



const App = () => {

  return (
    <MenuProvider>
    <>
    {/* <h1>{menuTitle}</h1> */}
    {/* need nav */}
    {/* <Menu /> */}

    </>
    </MenuProvider>
    <fragment>

    <MenuProvider.Consumer>
      {context => (

        {
          Object.keys(context.section).map(carID => (
            <Card
              id={carID}
              section={context._key}
            />
          ))
        }
      )}
    </MenuProvider.Consumer></>
  )
}

export default App
