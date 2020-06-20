const { Queue } = require('./dataStructures');

class Animal {   
    constructor(name) {
        this.name = name;
        this.order;
    }

    getOrder() {
        return this.order;
    }

    setOrder(number) {
        this.order = number;
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name)
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

class AnimalQueue {
    constructor() {
        this.dogsQueue = new Queue();
        this.catsQueue = new Queue();
        this.order = 0;
    }

    addAnimal(animal) {
        this.order++;
        animal.setOrder(this.order);

        if (animal.constructor.name == 'Dog') {
            this.dogsQueue.push(animal);
        } else {
            this.catsQueue.push(animal);
        }
    }

    dequeueDog() {
        return this.dogsQueue.remove();
    }

    dequeueCat() {
         return this.catsQueue.remove();
    }

    dequeueAny () {
        let firstCat = this.catsQueue.peek();
        let firstDog = this.dogsQueue.peek();

        if (firstDog.order > firstCat.order) {
            return this.catsQueue.remove();
        } else {
            return this.dogsQueue.remove();
        }
    }
}

let d1 = new Dog('d1');
let d2 = new Dog('d2');
let d3 = new Dog('d3');

let c1 = new Cat('c1');
let c2 = new Cat('c2');
let c3 = new Cat('c3');

let q = new AnimalQueue();
q.addAnimal(d1);
q.addAnimal(c3);
q.addAnimal(d2);
q.addAnimal(c1);
q.addAnimal(c2);
q.addAnimal(d3);

let d = q.dequeueDog();
d =  q.dequeueDog();
let c = q.dequeueCat();
let a = q.dequeueAny();