import React from 'react'

// Organisms
import Provider from './src/organisms/provider'
import Container from './src/organisms/container'

// Styles
import 'sanitize.css'

function wrapRootElement ({ element, props, ...rest }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return (
    <Provider {...props}>
      {element}
    </Provider>
  )
}

function wrapPageElement({ element, props }) {
  return (
    <Container
      {...props}
    >
      { element }
    </Container>
  )
}

export {
  wrapRootElement,
  wrapPageElement
}