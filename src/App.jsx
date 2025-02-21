import { useState } from 'react'
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import './App.css'

function App() {
  

  return (
    <>
      <div className='boxing'>
        <Logo />
        <Navigation />
       
        {/* // <imageLinkForm />
        // <faceRecognition /> */}
        
      </div>

    </>
  )
}

export default App
