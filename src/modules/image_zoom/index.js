import React from 'react'

// Zoom Image
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

/**
 * 
 * @param {{
 *    children: *
 * }} props 
 */
const ImageZoom = (props) => {
  const {
    children
  } = props
  return (
    <Zoom
      overlayBgColorEnd='rgba(236, 236, 236, 0.85)'
      zoomMargin={60}
    >
      { children }
    </Zoom>
  )
}

export default ImageZoom


