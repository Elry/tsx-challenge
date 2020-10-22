import 'mocha';
import { Main } from '../src/index';
import { expect, assert } from 'chai';

describe('Main', () => {
  const main = new Main();
  
  describe('#looper()', () => {
    it('Should return array', () => {
      expect(main.looper()).to.be.an('array');
    });
  });
});