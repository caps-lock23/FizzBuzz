/*When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number*/

function increment() {
  let input = parseInt(
    prompt("Please enter a number you want to Fizz Buzz up to: ")
  );
  for (let i = 0; i <= input; i++) {
    console.log(i);
  }
  return input;
}

increment();
