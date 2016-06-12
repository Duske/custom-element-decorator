import validate from 'validate-element-name';

/**
 * converts a camelcase text to a dashed one
 * @param  {String} text text to be converted
 * @return {String}      the converted text
 */
function camelCaseToDashed(text) {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

/**
 * component decorator for classes
 * This decorator automatically checks for a valid component name and registers
 * the element in the DOM
 * Usage:
 * 	@component(<optional-name, like 'super-duper-component'>)
 *  class superComponent extends HTMLElement {}
 * @param  {String} name Optional, explicit name for the component. If this is
 * not set, the component name will be guessed by the classname.
 * @return {Function}      Returns the class function which is already registered
 * as a DOM element
 */
export function customElement(name) {
  return (target) => {
    let componentName = name ? name : camelCaseToDashed(target.name);
    let checkedName = validate(componentName);
    if(!checkedName.isValid) {
      throw new Error(checkedName.message);
    }
    return document.registerElement(componentName, target);
  }
}
