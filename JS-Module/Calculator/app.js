/* pseudocode 
1- Listen and capture all the button events.
2-when an event occurs, depending on the button, i will do +,x,/,-
3-For any operation, I have to get values from the text boxes too.
*/

//add button
addButton = document.getElementById('addButton');
addOperation =function(){
    num1= document.getElementById('num1');
    num2= document.getElementById('num2');

    sum= parseInt(num1.value) + parseInt(num2.value);
    result= document.getElementById('result');
    result.innerText =sum;
}
addButton.addEventListener('click', addOperation);

//subtract  button
minusButton = document.getElementById('minusButton');
minusOperation =function(){
    num1= document.getElementById('num1');
    num2= document.getElementById('num2');

    difference= parseInt(num1.value) - parseInt(num2.value);
    result= document.getElementById('result');
    result.innerText = difference;
}
minusButton.addEventListener('click', minusOperation);