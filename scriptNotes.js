// ! - НЕ
// || - AБО
// && - І

let cars = ['BMW', "Porche", "Audi"];

// alert(cars);
// alert(cars[2]);

cars[2] = 'Ferrari';
// alert(cars);
// alert(cars[2]);

console.log(cars.length);
for(let i = 0; i < cars.length; i++) {
    console.log(i, cars[i]);
}

function letterFinder(word, match) {
    for(let i = 0; i < word.length; i++) {
        if (word[i] == match) {
            console.log(i, word[i]);
        } else {
            console.log('Такої літери в цьому слові немає.')
        }
    }
}

letterFinder('cat', 'A');

 cars = ["BMW", "Reno", "Audi"];
let fruits = ["Apple", "Orange", "Plum", "Kiwi", "Watermelon", "Lemon"];
//цикл, який виводить всі елменти масиву
function showArray() {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
console.log(fruits[fruits.length - 1]);
console.log(fruits[fruits.length - 2]);
}
showArray();