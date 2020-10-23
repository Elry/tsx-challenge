import 'mocha';
import { expect } from 'chai';
import { Showing } from '../src/index';

describe('Main', () => {
  const showing = new Showing();
  
  describe('Mapping', () => {
    describe('Result', () => {
      let resultValues = Array.from(showing.getResult().values());

      it('Should be instance of Map object', () => {
        expect(showing.getResult()).instanceOf(Map);
      });
  
      it('Map object should not be empty', () => {
        expect(showing.getResult()).to.not.be.empty;
      });
  
      it('Have size equal to 100', () => {
        expect(showing.getResult().size).to.be.equal(100);
      });

      it('Should have all strings Five as a string', () => {
        expect(resultValues.includes('Five')).to.be.true;
      });

      it('Should have all strings Three as a string', () => {
        expect(resultValues.includes('Three')).to.be.true;
      });

      it('Should have all strings ThreeAndFive as a string', () => {
        expect(resultValues.includes('ThreeAndFive')).to.be.true;
      });

      it('Check if result mapper have values of type of number', () => {
        expect(!resultValues.some(i => i instanceof Number)).to.be.true;
      });

      it('Check if result mapper have values of type of String', () => {
        expect(!resultValues.some(i => i instanceof String)).to.be.true;
      });
    });

    describe('GeneralMapping', () => {
      it('Should be instance of Map object', () => {
        expect(showing.getFiveMap()).instanceOf(Map);
        expect(showing.getThreeMap()).instanceOf(Map);
        expect(showing.getNormalMap()).instanceOf(Map);
      });
  
      it('Map object should not be empty', () => {
        expect(showing.getFiveMap()).to.not.be.empty;
        expect(showing.getThreeMap()).to.not.be.empty;
        expect(showing.getNormalMap()).to.not.be.empty;
      });
  
      it('Have expected size', () => {
        expect(showing.getNormalMap().size).to.be.equal(100);
        expect(showing.getFiveMap().size).to.be.equal(Math.round(100 / 5));
        expect(showing.getThreeMap().size).to.be.equal(Math.round(100 / 3));
      });

      it('Check if all values of the other mappers have strings only', () => {
        let fiveValues = Array.from(showing.getFiveMap().values()),
        threeValues = Array.from(showing.getThreeMap().values());
        
        expect(!fiveValues.some(i => i instanceof String)).to.be.true;
        expect(!threeValues.some(i => i instanceof String)).to.be.true;
      });

      it('Have expected string Five and ThreeAndFive', () => {
        let fiveValues = Array.from(showing.getFiveMap().values());
        expect(fiveValues.includes('Five')).to.be.true;
        expect(fiveValues.includes('ThreeAndFive')).to.be.true;
      });

      it('Have expected string Three', () => {
        let threeValues = Array.from(showing.getThreeMap().values());
        expect(threeValues.includes('Three')).to.be.true;
      });

      it('Check if all values from normal mapper are numbers', () => {
        let normalValues = Array.from(showing.getNormalMap().values());
        expect(!normalValues.some(i => !Number.isInteger(i))).to.be.true;
      });
    });
  });
});