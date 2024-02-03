//Вирахувати факторіал числа за допомогою for або while. 
//Число вводиться з промпту, число знаходиться в межах від 1 до 50.
// Факторіал - це добуток натуральних чисел від одиниці до вашого числа, наприклад факторіал від 7 буде:
//1 * 2 * 3 * 4 * 5 * 6 * 7 = 5040
//або від 5
//1 * 2 * 3 * 4 * 5 = 120

//за допомогою масива і циклу for
// let startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))

// let newArr = []
// let factorial = 1

// for (let i = 0; i < startNumber; i++){
//     newArr.push(i+1)
//     console.log(newArr)
//     factorial *= newArr[i]
// }

// console.log("factorial=", factorial)


//----------------------------------------------------------------------------------------------
//за допомогою циклу for
// //n! = 1*2*3*4*5*6*7*8*9*10
// //n! = n * (n - 1) * (n - 2) * ...*1

let startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))
while (startNumber < 1 || startNumber > 50){
    startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))}


let factorial = 1
for( let i = 0; i < startNumber; i++){
    factorial = factorial * (startNumber - i)
    if (i === startNumber - 1){
        console.log("factorial = ", factorial)}
}




//-----------------------------------------------------------------------------------------------
//за допомогою циклу do while
// let startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))
//while (startNumber <1 || startNumber>50){
//    startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))}

// let factorial = 1
// let period = 0

// do {factorial = factorial * (startNumber - period)
// period += 1
// } while (period < startNumber);

// console.log(factorial)


//за допомогою циклу while
// let startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))
//while (startNumber <1 || startNumber>50){
//    startNumber = Number(prompt("Enter the number in the range between 1 and 50: "))}

// let factorial = 1
// let period = 0

// while (period < startNumber){
//     factorial = factorial * (startNumber - period)
//     period += 1
// }

// console.log(factorial)