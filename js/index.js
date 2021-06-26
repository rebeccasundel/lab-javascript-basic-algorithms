// Iteration 1: Names and Input

let hacker1 = "Rebecca";

console.log("The driver's name is " + hacker1);

let hacker2 = "Randomness";

console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(
      "The driver has the longest name is " + hacker1 + ", it has characters"
    );
  } else if (hacker2.lenght > hacker1.lenght) {
    console.log(
      "It seems that the navigator has the longest name, it has " +
        hacker2 +
        " characters."
    );
  } else {
    console.log(
      "Wow, you both have equally long names, " + hacker1.length + " characters!."
    );
  }

  


// Iteration 3: Loops

let hacker1New = hacker1.split("").join(" ");

console.log(hacker1New);

let hacker1NewReverse = hacker1.split("").reverse().join("");

console.log(hacker1NewReverse);

let hacker1First = hacker1.charAt(0).toLowerCase();
let hacker2Second = hacker2.charAt(0).toLowerCase();

if (hacker1First < hacker2Second) {
  console.log("The driver's name goes first.");
} else if (hacker1First === hacker2Second) {
  console.log("What?! You both have the same name?");
} else {
  console.log("Yo, the navigator goes first definitely.");
}
