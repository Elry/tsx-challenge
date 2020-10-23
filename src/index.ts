// 1 if mode
export class Main{
  constructor(){}

  mapper = () => {
    let  count = 0;
    let threesMap = new Map(), fivesMap = new Map(), normalMap = new Map();
    
    for(let a = 1; a <= 100; a++){
      normalMap.set(a, a);
    }
    
    for(let a = 3; a <= 100; a += 3){
      threesMap.set(a, 'Three');
    }

    for(let a = 5; a <= 100; a += 5){
      count++;
      if(count === 3 ){
        fivesMap.set(a, 'ThreeAndFive');
        count = 0;
        continue;
      }
      fivesMap.set(a, 'Five');
    }

    let rMap = new Map([...Array.from(normalMap.entries()), ...Array.from(threesMap.entries()), ...Array.from(fivesMap.entries())]);
    return rMap;
  }
}

// 3 ternaries mode
class Test{
  constructor(){}

  looper = () => {
    let simpleArr:(String|number)[] = [];
    for(let a = 1;a <= 100; a++){
      simpleArr.push(this.checker(a));
    }
    return simpleArr;
  }

  setThree = (val:number) => { return (val % 3 === 0) ? "Three" : val; }
  setFive = (val:number) => { return (val % 5 === 0) ? "Five" : this.setThree(val); }
  checker = (val:number) => { return (val % 3 === 0 && val % 5 === 0) ? "ThreeAndFive" : this.setFive(val); }
}