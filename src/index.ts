export class Main{
  constructor(){}

  looper = () => {
    let simpleArr = [];

    for(let a = 1;a <= 100; a++){
      simpleArr.push(this.checker(a));
    }
    console.log(simpleArr);
    return simpleArr;
  }

  setThree = (val) => { return (val % 3 === 0) ? "Three" : val; }
  setFive = (val) => { return (val % 5 === 0) ? "Five" : this.setThree(val); }
  checker = (val) => { return (val % 3 === 0 && val % 5 === 0) ? "ThreeAndFive" : this.setFive(val); }
}