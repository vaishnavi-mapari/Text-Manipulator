
//TextManipulator Project

import React from 'react'
import Navbar from './component/Navbar'
import InputOutput from './component/InputOutput'

const App = () => {
  return (
    <div>

       < Navbar title='TextManipulator' about='About Us'/>
       <div className='container'>
      <h1 style={{textAlign:'center'}}>Welcome to TextManipulator</h1>
      <InputOutput/>
      </div>
      
    </div>
  )
}

export default App
