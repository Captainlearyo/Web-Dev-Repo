// Week 1 - Tuesday

/*
    // console.log("hello world");
    // console.log(15 % 5 === 0); //true
        console.log(5 === 0);
        console.log(!5 === 0);
        console.log(!true || !false);
        let a =true;
        let b = String;
        String = John Oleary;
        console.log(String(1));
        num++;
        console.log( 2 !==3);

        let number = 10;
        let isEvan = number % 2 === 0;
        console.log(isEvan)
    // === will not match values across types
    // == will match values across types
        console.log('5' == 5);
        console.log('5' === 5);
    // != loose not equals
    // !== strict not equals
 */
// String type Demo 10/25/2022
/*


        console.log("This is a String")
        //Starting with 0, this tells the length of the string
        console.log("This is a String".length)

        //Starting with 0, this will tell you the charicter in that position in the string
        console.log("This is a String"[3])

        console.log("This is a String"[3+2])
        console.log("This is a String"["This is a String".length-1])

        //will give the order of chosen character, will always give the first letter index
        console.log("This is a String".indexOf("a"))
        console.log('bootcamp'.indexOf('camp'));

*/

// Function Lecture 10/25/2022
 /*

        function ThisIsTheNameOfTheFunction(parameter1, parameter2) {
        //this is the code to be run when function is invoked
        }
        ThisIsTheNameOfTheFunction(argument1, argument2);
        let firstName = "John"
        console.log(firstName.length)//3

        let animal2 ="rhino";

        console.log(animal2.indexOf("r")) //0
        console.log(animal2.indexOf("i")) //2
        //concatenation
        let firstName2 = "jimmy"
        let title = "programmer"

        console.log(firstName2 + " " + title);

    //.concat
         console.log(firstName2.concat('is a ', title));
 */
 //averageOfFour
 /*


         function averageOfFour(num1, num2, num3, num4) {
            // 1. sum the average of 4 parameters
            // 2. devide the sum by 4
            // 3. return the new sum
            let sum = num1 + num2 + num3 + num4;
            let average = sum / 4;
            return average;
         }

         console.log(averageOfFour(10, 10, 15, 5)) // => 10
 */
 //Conditionals Demo
 /*

         //if (this is the condition) { this is the code that will be run}
         if (true === true) {
            console.log('this is true')
            }
             // Else will happen if no othe condtion is met
            else {
                console.log('this is false')
            }
            let c = 'cat'

          if (c === "dog") {
             console.log("I'm a dog")
             }
             // Else if goes between if and else.
             else if (c === 'turtle') {
                  console.log('turtle')
             }
             else {
                console.log("I Don'T know")
             }

             function printName(name){
                return name;
             }
             console.log(printName(John)) //john
 */

//loops demo
 /*


    //while loop

         // begginig
         let index = 0;
        // condition
         while (index < 5){
         console.log("hello world");
        // loop end expresion
         index ++;
        }

    // for loop
        for(let i = 0; i<= 5; i++){
                console.log(i)
        }

        //iterate through a word
        function iterateThroughWord(word){
        //consol.log(word)
         for(let i = 0; i <word.length; i ++){
            consol.log(i)
        }
        }

        iterateThroughWord('javescript')

 */

//Arrays
/*
        let first = [1,2,3];
        let second = [5,5,5]
        let third = first.concat(second);
        console.log(third);
        console.log(first);
*/

// String Exercise
/*
    let firstName = "John"
    let lastName = "O'Leary"
    console.log('john'[3]);
    console.log('john' + ' ' + "O'Leary");
    console.log(firstName.concat(' ' + lastName));
    console.log(firstName.length + lastName.length);
    console.log((firstName.length + lastName.length) % 2);
*/

//Call this function
/*
function isCool(string) {
  let coolSentence = string + " is cool!"
  console.log(coolSentence)
  return coolSentence
}

isCool('John')
*/
