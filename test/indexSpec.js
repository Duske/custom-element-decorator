/* globals document */
import { doesNotThrow, throws, equal } from 'assert';
import { customElement } from '../';
import TestComponent from './fixture/testComponent';

/**
 * checks whether an element tag is registered as a custom element,
 * see http://stackoverflow.com/a/28210364/4413057
 * @param  {String}  name tagname, e.g. test-component
 * @return {Boolean}      [description]
 */
function isRegistered(name) {
  return document.createElement(name).constructor !== HTMLElement;
}

describe('A component decorator', () => {
  it('does not throw if the given name is valid', () => {
    doesNotThrow(() => {
      customElement('valid-named-component')({});
    }, Error);
  });

  it('throws if the given name is invalid', () => {
    throws(() => {
      customElement('invalidnamedcomponent')({});
    }, Error);
  });

  it('returns a valid constructor', () => {
    doesNotThrow(() => {
      new TestComponent();
    }, Error);
  });

  it('registers the custom element in the DOM', () => {
    new TestComponent();
    equal(isRegistered('test-component'), true);
  });

});
