import { Mapping } from './mapping';

export class Showing extends Mapping {
  public getNormalMap = () => {
    return this.normalMap();
  }

  public getThreeMap = () => {
    return this.threeMapper();
  }

  public getFiveMap = () => {
    return this.fiveMapper();
  }

  public getResult = () => {
    return new Map<number, number|String>([
      ...Array.from(this.normalMap().entries()),
      ...Array.from(this.threeMapper().entries()),
      ...Array.from(this.fiveMapper().entries())
    ]);
  }
}