/**
 * NOTE:
 * =====
 * This should only be used in a pure javascript
 * file that isnt responsible for rendering.
 * 
 * If it is, it will cause rehydration issues with react.
 * 
 * HOW IT WORKS:
 * =============
 * When gatsby builds the site it does this in a pure node
 * context. Nodejs does not have a global window variable unlike
 * the browser. This then allows me to detect in which context the
 * site is being processed in (Browser or Node)
 * 
 * CAVEATS:
 * ========
 * This utility cannot be used in any react spesific context
 * (In the browser) as this will cause rehydration issues.
 */

function isGatsbySSR() {
  return (typeof window === 'undefined')
}

export {
  isGatsbySSR
}