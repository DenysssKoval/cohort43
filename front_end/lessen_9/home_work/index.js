class Plant {
    constructor(growth, age) {
      this.growth = growth;
      this.age = age;
    }
  
    grow() {
      this.growth += 10;
    }
  }
  
  class Rose extends Plant {
    constructor(growth, age, numberOfFlowers) {
      super(growth, age);
      this.numberOfFlowers = numberOfFlowers;
    }
  }
  
  const rose = new Rose(20, 3, 5);
  
  console.log(rose.growth); // 20
  console.log(rose.age); // 3
  console.log(rose.numberOfFlowers); // 5
  
  rose.grow();
  
  console.log(rose.growth); // 30