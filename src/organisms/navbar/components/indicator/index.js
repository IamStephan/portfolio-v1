import React from 'react'

import { animated, useSpring } from 'react-spring'

// Styles
import styles from './styles.module.scss'

const INDICATOR_PADDING = 10
const INDICATOR_SIZE = 50
const SCALE = 20


const AnimatedColorMatrix = animated('feColorMatrix')

/**
 * 
 * @param {{
 *    size: number
 *    className: string
 * }} props 
 */
const Indicator = props => {
  const {
    octaves = 2,
    frequency = 0.015,
    className
  } = props

  function _handleClick() {

    const randomNuber = animation.value.getValue() > 360 ? 0 : animation.value.getValue() + 60
    set({ value: randomNuber })
  }

  let stylesToAdd = [
    styles['indicator']
  ]

  if(className) stylesToAdd.push(className)

  const addedStyles = stylesToAdd.join(' ')

  const [animation, set] = useSpring(() => ({value: 0}))

  const coordinates = (INDICATOR_SIZE / 2) + (INDICATOR_PADDING / 2)

  return (
    <svg
      height={INDICATOR_SIZE + INDICATOR_PADDING}
      width={INDICATOR_SIZE + INDICATOR_PADDING}
      className={addedStyles}
      onClick={_handleClick}
    >
      <filter
        id='navbar_indicator'
      >
        
        <feTurbulence
          type='turbulence'
          baseFrequency={frequency}
          numOctaves={octaves}
          result='turbulance_source'
        />

        {/**
         * I cannot animate the seed since its int based,
         * making the animation stagger.
         * 
         * So im using the colormatrix to shift the color values
         * and animating that
         */}
        <AnimatedColorMatrix
          in='turbulance_source'
          type='hueRotate'
          values={animation.value}
          result='rotated_turbulance_source'
        />

        <feDisplacementMap
          in='SourceGraphic'
          in2='rotated_turbulance_source'
          scale={SCALE}
          xChannelSelector='R'
          yChannelSelector='G'
          result='displacement'
        />

        {/**
         * Used to move the displacement back
         * to its original position.
         * 
         * That way the effect is actually center
         */}
        <feDisplacementMap
          in='displacement'
          in2='rotated_turbulance_source'
          scale={-SCALE}
          xChannelSelector='R'
          yChannelSelector='G'
        />
      </filter>

      <circle
        cx={coordinates}
        cy={coordinates}
        r={INDICATOR_SIZE / 2}
        className={styles['circle']}
        onClick={_handleClick}
      />

      {/**
       * Dev circle to see the bounding
       * of the indicator
       */}
      {/* <circle
        cx={coordinates}
        cy={coordinates}
        r={INDICATOR_SIZE / 2}
        className={styles['circleDev']}
      /> */}
    </svg>
  )
}

export default Indicator
