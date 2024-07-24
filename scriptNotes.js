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


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 101, 46, 55, 64];
let sum = 0;
let sum1 = 0;
let sumOdd = 0;
let sumEven = 0;
let ph = 1;
console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        sumEven = sumEven + numbers[i];
    } else if (numbers[i] % 2 == 1) {
        sumOdd = sumOdd + numbers[i];
    }
    sum1 = sum1 + numbers[i++];
    ph = ph * numbers[i];
    if (numbers[i] == numbers[0]) {
        console.log("Поточне число", numbers[i])
        console.log("Наступне число", numbers[i + 1])
    } else if (numbers[i] == numbers[numbers.length - 1]) {
        console.log("Попередне число", numbers[i - 1])
        console.log("Поточне число", numbers[i])
    } else {
        console.log("Попередне число", numbers[i - 1])
        console.log("Поточне число", numbers[i])
        console.log("Наступне число", numbers[i + 1])
    }
}  
    //  console.log(i, numbers[i]);

   //console.log(fruits.at(i));
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

console.log("sum1", sum1);

// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1])

// numbers[0] = 64;
// numbers[numbers.length - 1] = 1;

// console.log(numbers[0]);
// console.log(numbers[numbers.length - 1])

let temp;
temp = numbers[0];
numbers[0] = numbers[numbers.length - 1];
numbers[numbers.length - 1] = temp;

let temp1;
temp1 = numbers[0];
numbers[0] = numbers[2];
numbers[2] = temp1;

console.log(numbers[0]);
console.log(numbers[numbers.length - 1]);
console.log(numbers);

numbers.length = 10;//процес скорочення елментів масиву - незворотній
console.log(numbers);


let num1 = [64, 83, 29, 10, 18, 19, 35, 20, 24, 101];
let num2 = [83, 10, 65, 20, 77, 89, 24, 99, 100, 101];
let num3 = [];

for (let i = 0; i < num1.length; i++){
    if (num1[i] == num2[i]) {
        num3 = num1[i];
        console.log(num3[i]);
    }
}
console.log(num3)
// [Rap, Reggae,Jazz, Blues, Rock-n-Roll]
// [Jazz, Classics, Rock-n-Roll]
// [Classics, Rock-n-Roll]
//  Classics, Rock-n-Roll]
let styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock-n-Roll');
console.log(styles);

let temp2;
temp2 = styles[1];
styles[1] = styles[styles.length - 1];
styles[styles.length - 1] = temp2;

console.log(styles);

styles.unshift('Rap', 'Reggae');
console.log(styles);

// об`екти
let newModelBMW = {
    name: "BMW M4 CS",
    price: "Starts from £117,100",
    hoursePower: "510hp",
    turbocharching: "yes",
    color: "darkgreen"
};
console.log(newModelBMW);
console.log(newModelBMW.name);
console.log(newModelBMW.price);
// console.log(newModelBMW.hoursePower);
console.log(newModelBMW.turbocharching);
console.log(newModelBMW.color);

newModelBMW.engine = "3.0-litre";
console.log(newModelBMW);

delete newModelBMW.turbocharching;
console.log(newModelBMW);
//доступ до ключів через квадратні дужки

console.log(newModelBMW['name']);
newModelBMW[turbocharching = true];
console.log(newModelBMW[turbocharching]);
delete newModelBMW.turbocharching;

delete newModelBMW["turbocharching"];
console.log(newModelBMW);

delete newModelBMW["hoursePower"];
newModelBMW["hourse power"] = 510;
console.log("newModelBMW"); 
//коли саме використовувати тільки [ ]
//коли назви ключа має декілька слів
//[ ] дозволяють звернутися до властивості, ім'я якої може бути результатом виразу

// let key = "really pretty"
// newModelBMW[key] = true;
// console.log(newModelBMW);

// let keyInput = prompt('Введіть, яку властивість моделі BMW M4 хочете побачити?', );
// alert(newModelBMW[keyInput]);

//обчислювальні властивості 
let fruit = "apple";
// let fruit = prompt("Які фрукти купити?", "apple");
let vegatable = "potato"

let bag = {
    [fruit + "Sweet"]: 5,
    [vegatable]: 10,
};
console.log(bag);

function makeUser(name, age) {
    return {
        name, // = name: name,
        age,  // = age: age,
    };
};
let user = makeUser("Andrey", "14");
console.log(user);

//оператор пошуку in
//Перевіряє чи існує ключ в об'єкті? = true/false
console.log("name" in user);