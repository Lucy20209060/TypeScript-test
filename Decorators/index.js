// function Age(v: number) {
//     // 这个返回的函数才是真正的装饰器要执行的函数，作用是传参
//     return function<T extends {new(...args: any[]): {}}>(constructor: T): T {
//         class PersonAge extends constructor {
//             age: number = v;
//         }
//         return PersonAge;
//     }
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () { return this._x; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () { return this._y; },
        enumerable: true,
        configurable: true
    });
    __decorate([
        configurable(false)
    ], Point.prototype, "x");
    __decorate([
        configurable(false)
    ], Point.prototype, "y");
    return Point;
}());
function configurable(value) {
    return function (target, propertyKey, descriptor) {
        // descriptor.configurable = value;
    };
}
var point = new Point(4, 5);
console.log(point.x);
