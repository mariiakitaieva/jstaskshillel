//Користувач вводить через prompt номер пальця на руці.
// Вивести в alert назву пальця, відповідно до його номеру (якщо 1, то великий; якщо 2, то вказівний і тд)

const fingerNumber = Number(prompt("Enter the number of the finger from 1 to 5: "))
if (fingerNumber ===1){
    alert("Thumb finger")}
else if(fingerNumber===2){
    alert("Index finger")}
else if(fingerNumber===3){
    alert("Middle finger")}
else if(fingerNumber===4){
    alert("Ring finger")}
else if(fingerNumber===5){
    alert("Pinky finger")}
else {alert("You entered wrong data")}