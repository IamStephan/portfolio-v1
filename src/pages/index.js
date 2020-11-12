import React, { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

import { Link } from 'gatsby'

import Button from '../elements/button'

const index = () => {
  return <App />
}

const App = () => {
  return (
    <div
      style={{
        backgroundColor: '#fafafa'
      }}
    >
      <div>
        <Button>
          Submit Form
        </Button>

        <Button
          loading
        >
          Submit Form
        </Button>

        <Button
          disabled
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
        >
          Submit Form
        </Button>

        






        <Button
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='blue'
        >
          Submit Form
        </Button>




        <Button
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='yellow'
        >
          Submit Form
        </Button>

        





        <Button
          color='green'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='green'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='green'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='green'
        >
          Submit Form
        </Button>





        <Button
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='greyscale'
        >
          Submit Form
        </Button>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <Button>
          Submit Form
        </Button>

        <Button
          loading
        >
          Submit Form
        </Button>

        <Button
          disabled
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
        >
          Submit Form
        </Button>

        






        <Button
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='blue'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='blue'
        >
          Submit Form
        </Button>




        <Button
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='yellow'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='yellow'
        >
          Submit Form
        </Button>

        





        <Button
          color='green'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='green'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='green'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='green'
        >
          Submit Form
        </Button>





        <Button
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          loading
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          disabled
          color='greyscale'
        >
          Submit Form
        </Button>

        <Button
          disabled
          loading
          color='greyscale'
        >
          Submit Form
        </Button>
      </div>

    </div>
  )
}

export default index


