export class Main{
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

  mapper = () => {
    let tMap = [], fMap = {}, rMap = {}, a = 0;
    return [];
  }
}