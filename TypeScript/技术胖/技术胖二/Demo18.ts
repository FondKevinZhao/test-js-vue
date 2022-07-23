// 泛型之二：类中的泛型

/* class SelectGirl {
  constructor(private girls: string[]) {

  }
  getGirl(index: number): string {
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(['大脚', '刘英', '晓红']);
console.log(selectGirl.getGirl(1)); */



// new SelectGirl 的时候既可以传名字，也可以传编号
/* class SelectGirl {
  constructor(private girls: string[] | number[]) {

  }
  getGirl(index: number): string | number {
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(['大脚', '刘英', '晓红']);
console.log(selectGirl.getGirl(1)); */



// 用泛型的方式把上面的代码重构一下
class SelectGirl {
  constructor(private girls: string[] | number[]) {

  }
  getGirl(index: number): string | number {
    return this.girls[index]
  }
}

const selectGirl = new SelectGirl(['大脚', '刘英', '晓红']);
console.log(selectGirl.getGirl(1));