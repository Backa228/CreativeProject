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
function showArray (){
//цикл, який виводить всі елменти масиву
 for (let i = 0; i < fruits.length; i++) {
   console.log(i, fruits[i]);
   //console.log(fruits.at(i));
}
}
console.log(fruits[fruits.length - 1]);
console.log("At:", fruits.at(1));
    
//at може мати від'ємні значення
//at дозволяє отримати елемент масиву за індексом
    
console.log(fruits[fruits.length - 2]);
console.log("At:", fruits.at(-2));
showArray();
 
console.log("Pop:");
console.log(fruits.pop(), "видалено");
showArray();

console.log(fruits.pop(), "видалено");
showArray();

console.log("Push:");//Push - додає елмент в кінець масиву
console.log(fruits.push("Peach"), "додано");
showArray();

fruits.push("Cherry");
fruits.push("Apricot");
console.log(fruits);

console.log(fruits.pop(), "видалено");
console.log(fruits);
console.log(fruits.pop(), "видалено");
console.log(fruits);
fruits.push("Lemon");
console.log(fruits);

//shift - видаляє перший елемент масиву
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
fruits.shift();
console.log(fruits);
// fruits.unshift();
// console.log(fruits);

//push/pop працюють швидко
//shift/unshift, працюють повільно


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
let sumOdd = 0;
let sumEven = 0;
let ph = 1;
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 0) {
        sumEven = sumEven + numbers[i];
    } else if(numbers[i]%2 == 1) {
        sumOdd = sumOdd + numbers[i];
    }
    sum = sum + numbers[i];
    ph = ph * numbers[i];
    //  console.log(i, numbers[i]);

   //console.log(fruits.at(i));
}
console.log("Sum of not even numbers:", sumOdd)
console.log("Sum of even numders:", sumEven);
console.log("sum:", sum);
console.log("ph:", ph);

sumEven = 0;
sumOdd = 0;
ph = 1;
for (let num of numbers) {
    console.log(num);
    if (num % 2 == 0) {
        sumEven = sumEven + num;
    } else {
        sumOdd = sumOdd + num; 
    }
    ph = ph * num;
}
console.log("Sum of not even numbers:", sumOdd)
console.log("Sum of even numders:", sumEven);
console.log("ph:", ph);