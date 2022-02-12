// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
//   draw: function () {
//     console.log(draw);
//   },
// };

// circle.draw();

// Factory Function - returns an object

function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}
const circle = createCircle(1);

// Constructor Function - when used this keyword and new

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new Circle(1);

// Creates a new object, sets this to object and returns object with function

// Every object has a constructor property which references the function that was used to create an object

// Functions are objects

const Circle1 = new Function(
  "radius",
  ` 
 this.radius = radius
this.draw = function () {
  console.log("draw")
}`
);

Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// In JS functions are Objects

// Value Types - Number, String, Boolean, Symbol, undefined and null

// Reference Types - Object, Function, Array

let x = { value: 10 };
let y = x;

x.value = 20;
