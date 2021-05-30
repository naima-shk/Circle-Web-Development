
//array traversing using for loop in ascending and descending order.
/*let fruits =['apple','orange', 'mango'];
for (let i=fruits.length-1; i>=0; i--){
    console.log(fruits[i]);
} */

// Print table of 2 till 2 times 12 using for loop.
/*let a=2;
let b;
for (let i=1; i<=12; i++)
{
    b=a*i;
   
    console.log("" +a+  "*" +i+  "=" +b);
}
//Print a reverse table of 5 starting from 50 to 5 using for loop.

/*for (let i=50; i>=5; i--)
{
    
   
    console.log(5, "x", i,"=",2*i,"</br>");
} */

// class work  'while-loop'

/*let games =['cricket','football','hockey'];
let i=0;
while (i <games.length) {
    console.log(games[i]);
    i++;
  } */
  //for each loop

  /*let games =['cricket','football','hockey'];

    games.forEach(myFunction);

function myFunction(item) {
  console.log(item);
} */
  //for-off loop
  /*for (let [i, v] of ['a', 'b', 'c'].entries()) {
    console.log(i, v)
  } */
  //switch statement
  
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  console.log(day);

