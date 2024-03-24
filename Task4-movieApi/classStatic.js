// Create a class that has class/static properties and methods. Show how to use/access them

class MathOperation {
  // Class property
  static PI = 3.14159;

  // Class method
  static square(x) {
    return x * x;
  }

  // Class method
  static circumference(radius) {
    return 2 * MathOperation.PI * radius;
  }
}

// Accessing class property
console.log(`Pi => ${MathOperation.PI}`); // Output: 3.14159

// Using class method
const result = MathOperation.square(7);
console.log(`The Square Result => ${result}`); // Output: 49

const circumferenceResult = MathOperation.circumference(6);
console.log(`The Circumference Result => ${circumferenceResult}`); // Output: 37.69911184307752