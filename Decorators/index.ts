// function Age(v: number) {
//     // 这个返回的函数才是真正的装饰器要执行的函数，作用是传参
//     return function<T extends {new(...args: any[]): {}}>(constructor: T): T {
//         class PersonAge extends constructor {
//             age: number = v;
//         }
//         return PersonAge;
//     }
// }

// @Age(1)
// class Cat {
//     name = '小猫咪'
// }
// @Age(2)
// class Dog {
//     name = '小奶狗'
// }

// let c1 = new Cat();
// console.log(c1); // Animal {name: "小猫咪", age: 1}

// let d1 = new Dog();
// console.log(d1); // Animal {name: "小奶狗", age: 2}


// function f() {
//     console.log("f(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("f(): called");
//     }
// }

// function g() {
//     console.log("g(): evaluated");
//     return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log("g(): called");
//     }
// }

// class C {
//     @f()
//     @g()
//     func() {}
// }

// var c = new C();
// c.func()

// function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
//     return class extends constructor {
//         newProperty = "new property";
//         hello = "override";
//     }
// }

// @classDecorator
// class Greeter {
//     property = "property";
//     hello: string;
//     constructor(m: string) {
//         this.hello = m;
//     }
// }

// console.log(new Greeter("world"));

// hello: "override"
// newProperty: "new property"
// property: "property"
// __proto__: Greeter



// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//     };
// }
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }

//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// console.log(new Greeter('world'))
// var greeter = new Greeter('world');
// greeter.greet()

class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // descriptor.configurable = value;
    };
}

var point = new Point(4,5)
console.log(point.x)