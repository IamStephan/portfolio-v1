import React, { useEffect } from 'react'

// Carousel
import { useEmblaCarousel } from 'embla-carousel/react'

// Styles
import styles from './styles.module.scss'

/**
 * 
 * @param {{
 *    emblaOptions: {
 *      align: ("start" | "center" | "end")
 *      slidesToScroll: number
 *      containScroll: ("trimSnaps" | "keepSnaps")
 *      draggable: boolean
 *      dragFree: boolean
 *      loop: boolean
 *      speed: number
 *      startIndex: number
 *      selectedClass: string
 *      draggableClass: string
 *      draggingClass: string
 *      inViewThreshold: number
 *    }
 *    fixedSlideWidth: boolean
 *    viewportClass: string
 *    containerClass: string
 * }} props 
 */
const Carousel = props => {
  const {
    // Embla props
    emblaOptions = {},

    // Component props
    fixedSlideWidth = false,
    viewportClass = '',
    containerClass = '',

    // Slides
    children,
  } = props

  const [emblaRef, emblaApi] = useEmblaCarousel(emblaOptions)

  let slides = children

  if(emblaOptions?.loop) {
    if(Array.isArray(children)) {
      slides = slides.map((child, i) => React.cloneElement(child, {
        className: `${styles['loopSlide']} ${child.props.className ? child.props.className : ''}`,
        key: i
      }))
    }
  }

  if(fixedSlideWidth) {
    if(Array.isArray(children)) {
      slides = slides.map((child, i) => React.cloneElement(child, {
        className: `${styles['fixedSlideWidth']} ${child.props.className ? child.props.className : ''}`,
        key: i
      }))
    } else if(children) {
      slides = React.cloneElement(slides, {
        className: `${styles['fixedSlideWidth']} ${slides.props.className ? slides.props.className : ''}`
      })
    }
  }

  useEffect(() => {
    if(!emblaApi) return

  }, [emblaApi])

  return (
    <div
      className={`${styles['viewport']} ${viewportClass}`}
      ref={emblaRef}
    >
      <div
        className={`${styles['container']} ${containerClass}`}
      >
        { slides }
      </div>
    </div>
  )
}

export default Carousel
