 // 3 "ifs"
class Test{
  private setThree = (val:number) => { return (val % 3 === 0) ? "Three" : val; }
  private setFive = (val:number) => { return (val % 5 === 0) ? "Five" : this.setThree(val); }
  private checker = (val:number) => { return (val % 3 === 0 && val % 5 === 0) ? "ThreeAndFive" : this.setFive(val); }
  
  private looper = () => {
    let simpleArr:(String|number)[] = [];
    for(let a = 1;a <= 100; a++){
      simpleArr.push(this.checker(a));
    }
    return simpleArr;
  }

  public getResult = () => {
    return this.looper();
  }
}