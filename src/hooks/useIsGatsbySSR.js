import { useState, useLayoutEffect } from "react"

/**
 * NOTE:
 * =====
 * When reandering a react component use this
 * to determine if the site is being built or
 * being loaded. Always assume that the site is
 * being built then switch if it is not. This avoids
 * rehydration problems with react
 * 
 * HOW IT WORKS:
 * =============
 * useEffect only gets fired in the context of a window
 * being drawn on the screen. When gatsby is building the site
 * their is no window to render to, therefore, the effect never
 * gets runned when building.
 * 
 * useLayoutEffect gets fired before any window flushes.
 * Rather then use this
 * 
 * CAVEATS:
 * ========
 * There will be a flash of content when the site gets loaded
 * since it only fires when the javascript gets downloaded.
 * 
 * This then leaves me with the conclusion of not depending on this
 * effect for visual based elements. if however it's required to be
 * used in such a context, simply have a SSR spesific element to be
 * placed temporarily.
 */

/**
 * @returns {boolean} Returns false if the website is run by a client
 */ 
const useIsGatsbySSR = () => {
  const [isIsGatsbySSR, setIsGatsbySSR] = useState(true)

  useLayoutEffect(() => {
    setIsGatsbySSR(false)
  }, [])

  return { isIsGatsbySSR }
};

export {
  useIsGatsbySSR
}