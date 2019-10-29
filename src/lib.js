/**
 * format any matched attribute to its proper css selector notation
 * e.g. "-cy:my-selector-name" will be replaced by [data-cy="my-selector-name"]
 * @param  {string}  selectors  the css selectors
 * @param  {RegExp}  regExp     the regular expression to detect the attribute selector short notation
 * @return {string}             the formatted selectors
 */
export const formatSelectors = (selectors, regExp = /(^-.+\:)/) => {
  selectors
  .split(" ")
  .forEach((selector) => {
    let match = selector.match(regExp)
    if (match) {
      match = match.pop()
      const attr = "data" + match.slice(0, -1)
      const value = selector.replace(match, "")
      selectors = selectors.replace(`${match}${value}`, `[${attr}=\"${value}\"]`)
    }
  })
  return selectors
}