//alert("Hello, World!");
//userName = prompt("Enter your name: ");
//console.log("Hello, ", userName, "! How are you?");

//# зробити конвертер з градусів Цельсія у градуси Фаренгейту
//- (C * (9/5)) + 32 = F

const celciusDegrees= +prompt("Enter Celsius degrees:");
const fahrenheitDegrees = celciusDegrees*9/5+32;
document.write(`${celciusDegrees}°C is ${fahrenheitDegrees}°F`);
console.log(`${celciusDegrees}°C is ${fahrenheitDegrees}°F`);