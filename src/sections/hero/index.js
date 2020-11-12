import React from 'react'

// Shaders
import { Sketch } from '../shaders'

const Hero = () => {
  return (
    <div>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'contain',
          overflow: 'hidden',
        }}
        id="gl" 
        data-image-original="/ball.jpg" 
        data-image-depth="/ball-map.jpg" 
        data-horizontal-threshold="35" 
        data-vertical-threshold="10" />
    </div>
  )
}

export default Hero
