class Animal{
    constructor(name, type, age, size){
        this.name = name;
        this.type = type;
        this.age = age;
        this.size = size;
        this.isEaten = false;
    }
    set type(kind){
        if(kind !== "carnivore" && kind !== "omnivore" && kind !== "herbivore"){
            throw new Error("There is no such kind");
        } else {
            this._type = kind;
        }
    }
    get type(){
        return this._type;
    }
    eat(animal){
        if(animal instanceof Animal){
            if(this.type === "herbivore"){
                console.log(`The animal ${this.name} is a herbivore and does not eat other animals!`);
                return;
            }
            if(this.size >= animal.size * 2){
                animal.isEaten = true;
                console.log(` The animal ${this.name} ate the ${animal.name}!`);
                return;
            } else{
                console.log(`The animal ${this.name} tried to eat the ${animal.name} but it was too large`);
                return;
            }
        }
        console.log(`The animal ${this.name} is eating ${animal}`);
    }
}

let dragon = new Animal("dragon", "carnivore", 2222, 4000);
let unicorn = new Animal("unicorn", "herbivore", 1000000, 33300);
let mouse = new Animal("mouse", "omnivore", 0.5, 1);
dragon.eat(mouse);
dragon.eat(unicorn);
unicorn.eat(mouse);