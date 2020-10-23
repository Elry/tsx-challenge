import 'mocha';
import { expect } from 'chai';
import { Showing } from '../src/index';

describe('Main', () => {
  const showing = new Showing();
  
  describe('Mapping', () => {
    describe('Result', () => {
      it('Should be instance of Map object', () => {
        expect(showing.getResult()).instanceOf(Map);
      });
  
      it('Map object should not be empty', () => {
        expect(showing.getResult()).to.not.be.empty;
      });
  
      it('Have size equal to 100', () => {
        expect(showing.getResult().size).to.be.equal(100);
      });

      it('Should have all strings (Five, Three, ThreeAndFive) required', () => {
        let mapValues =  Array.from(showing.getResult().values());
  
        expect(mapValues.includes('Five')).to.be.true;
        expect(mapValues.includes('Three')).to.be.true;
        expect(mapValues.includes('ThreeAndFive')).to.be.true;
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
    });
  });
});