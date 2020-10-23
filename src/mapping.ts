export class Mapping {
    protected normalMap = () => {
      let nMap = new Map<number, number>();
  
      for(let a = 1; a <= 100; a++){
        nMap.set(a, a);
      }
  
      return nMap;
    }
  
    protected threeMapper = () => {
      let tMap = new Map<number, String>();
      for(let a = 3; a <= 100; a += 3){
        tMap.set(a, 'Three');
      }
  
      return tMap;
    }
  
    protected fiveMapper = () => {
      let count:number = 0;
      let fMap = new Map<number, String>();
  
      for(let a = 5; a <= 100; a += 5){
        count++;
        // IF HERE
        if(count === 3 ){
          fMap.set(a, 'ThreeAndFive');
          count = 0;
          continue;
        }
        fMap.set(a, 'Five');
      }
  
      return fMap;
    }
  }