//Визначити, чи є рік високосним, чи ні. Рік буде високосним, якщо він кратний 400
//або він одночасно кратний 4 і не кратний 100 ﻿Рік вводиться через prompt, результат - в алерт.

const year = +prompt("Enter the year: ")

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) { 
    alert("The year is a Leap Year!")
}
else{
    alert("The year is not a Leap Year!")
}
