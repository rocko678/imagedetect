import React from "react";
import Tilt from 'react-parallax-tilt';
import brain from './brain.jpg';

const Logo = () => {
    return (
        
        <Tilt>
            <div style={{ height: '100px', width: '100px', backgroundColor: 'Blue' }}>
            <img src= {brain} alt='logo' height='100px' width='100px'/>
            </div>
        </Tilt>
       
    );
    
}

export default Logo;