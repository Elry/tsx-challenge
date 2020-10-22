import { Main } from '../src/index';
import { expect, assert } from 'chai';

describe('Main', () => {
  const main = new Main();
  
  describe('#looper()', () => {
    it('Should return array', () => {
      expect(main.looper()).to.be.an('array');
    });
  });

  // describe('#setFive()', () => {
  //   it('Should return five with [0] as upper case', () => {
  //     expect(main.setFive(5)).to.be.equal('Five');
  //   });
  //   it('Should not return five in any way', () => {
  //     expect(main.setFive(4)).to.be.null;
  //   });
  // });

  // describe('#setThree()', () => {
  //   it('Should return Three', () => {
  //     assert.equal(main.setThree(3), 'Three');
  //   });
  // });

  // describe('#setThreeFive()', () => {
  //   it('Should return ThreeAndFive', () => {
  //     assert.equal(main.setFT(15), 'ThreeAndFive');
  //   });
  // });
});