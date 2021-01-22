
/**
 * 
 * @param {{
 *    [string]: string
 * }} data 
 */
export function encode(data) {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
}
