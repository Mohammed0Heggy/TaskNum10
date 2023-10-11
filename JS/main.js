var firstName = "ahmed2020";
var lastName = "belal";

console.log(firstName.slice(0, 5));
console.log(firstName.length);
console.log(firstName.indexOf("m"))
console.log(firstName.includes("z"))
console.log(firstName.replace(firstName, "mohammed"))
// ===================================================

let student = ["mohamed", "belal"]
console.log(student)

// first way
student.push(30);
console.log(student)

// second way
student.splice(2, 0, 30)
console.log(student)

// third way 
student[2] = 30;
console.log(student)
// --------------------------------------
// first way
student.push("Egypt");
console.log(student)

// second way
student.splice(-1, 0, "Egypt")
console.log(student)
// --------------------------------------------
// first way
student.splice(0, 0, "grade2")
console.log(student)

// second way
student.unshift("grade2")
console.log(student)
// ---------------------------------------------
student.splice(3, 0, 88, 79, 66)
console.log(student)
// --------------------------------------------
console.log(student.concat(["football", "swimming"])
)
// -----------------------------------------
console.log(student.reverse());

// ===================================================

let arr = [10, 30, -5, 13, 6, 55];

console.log(Math.max.apply(null, arr))
// -----------------------------------------
console.log(arr.sort(function (a, b) { return a - b }))
// ----------------------------------------------
console.log(arr.sort(function (a, b) { return b - a }))