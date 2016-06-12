# Custom element decorator [![Build Status](https://travis-ci.org/Duske/custom-element-decorator.svg?branch=master)](https://travis-ci.org/Duske/custom-element-decorator)
This package provides a simple [decorator](https://github.com/wycats/javascript-decorators) for custom element classes, which automatically
checks for a valid name and registers the element in the DOM.

**Please note**: The automatic registration relies on `document.registerElement()`. Please make sure that this is available in your environment, e.g. [document-register-element](https://github.com/WebReflection/document-register-element)

## Installation
```
npm install --save-dev rollup-plugin-babel
```

## Usage

### @customElement(componentname)
```js
import { customElement } from 'custom-element-decorator';

@customElement('super-component')
export default class TestComponent extends HTMLElement {

}
```
The given name ('super-component') will be checked for validity and the element gets registered as `document.registerElement('super-component', TestComponent)`

### @customElement()
You can also let the decorator guess the name of the component, if you omit the name parameter:
```js
import { customElement } from 'custom-element-decorator';

@customElement()
export default class SuperHotComponent extends HTMLElement {

}
/**
 * Element will be registered as
 * document.registerElement('super-hot-component', SuperHotComponent)
 */
```
## License
MIT
