import { useState } from 'react'
import Navigation from './Components/Navigation/navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import './App.css'

function App() {
  

  return (
    <>
      <div>
        <div className='boxing'>
        <Logo />
        <Navigation />
        </div>
        
        <div>
        <ImageLinkForm />
        </div>
        

        {/* // 
        // <faceRecognition /> */}
        
      </div>

    </>
  )
}

export default App
