// ! - НЕ
// || - AБО
// && - І

//масиви
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
console.log("region" in user);
console.log("test" in user);

//цикл for...in (має доступ до ключів/властивостей + до значень)
//впорядкування властивостей об'єкта
let developer = {
    name: "Dima",
    age: "53", 
    softSkills: 82, 
    techSkills: 74,
    health: 22,
}

for (let key in developer) {
    // console.log(key);
    // console.log(developer[key]);
    console.log(key, developer[key]);
}

let codes = {
   "49": "Німеччина",
    "44": "Великобританія",
    "38": "Україна",
    "1": "США",
}
//"49" - цілочисельне ім'я властивості, цикл for...in впорядковує їх за зростанням
for (let key in codes) {
    console.log(key, codes[key]);
}
//№1
let user1 = {};
//1
// user1.name = "Ivan";
user1["name"] = "Ivan";
//2
// user1.surName = "Smith";
user1["surName"] = "Smith";
//3
// user1.name = "Petro";
user1["name"] = "Petro";
//4
// delete user1.name;
delete user1["name"]
console.log(user1)

//№2
function isEmpty(obj) {
    if ("8:30" in obj) {
        return false;
    }
    else return true;

}
let schedule = {};

// let result = isEmpty(schedule)
console.log( isEmpty(schedule) ); // true
schedule["8:30"] = "Вставай";
console.log( isEmpty(schedule) ); // false

//Bugs та Errors
//Bugs - помилка в коді, яка не зупиняє програму, еле прошграма веде себе непередбачувано(не так як нам хочеться)
//Errors - помилка в коді, яка повністю зупиняє програму
//Syntax Error - шматок коду, який не можна прочитати

//SyntaxError: Unexpected EOF
//let error = "Syntax;
//SyntaxError: Unexpected identifier 'b'. Expected a ')' or a ',' after a parameter declaration.

// function add(a b){
//     let result = a + b;
//     if (result > 10){
//         console.log("Error"); //SyntaxError: Unexpected token '}'. Expected a statement as the body of an if block.
//         if (result > 20)
//     }
    //return a + b;
//}


//ReferenceError: Can't find variable: greting
//Reference error(помилки під час виконання)
// function greeting() {
//     var greeting = "Hello Word";
//     console.log(greting);
// }

// greeting();


//Type error - помилка, коли значення не відповідає очікуваному типу
//NaN - Not a Number
// function multiple(a, b) {
//     console.log(a * b)
// }

// multiple(10, 10);

// const a = 1;
// a = 10;

//(5).pop();TypeError: 5.pop is not a function
//TypeError: (5).pop is not a function.
//(In '(5).pop()', '(5).pop' is undefined)

//Range Error - помилка виникає тоді, коли аргументи функції виходять за межі дозволеного діапазону вхідних значень
// console.log((10).toString(2));
// console.log((104384984).toString(16));
// console.log((10).toString(100));
//RangeError: toString() radix argument must be between 2 and 36

try {
    //  let d = 1;
    // let c = 10;
    // console.log(c + d);
    // let a = 1;
    // console.log(a());
    //console.log((10).toString(100));
} catch (err) {
    console.log("Black Catch");
    console.log(err);
}

//коли нема помилок, блок catch ігнорується
//коли виникає помилка в блоці try, блок try зупиняється, спрацьовує блок catch
//try..catch НЕ може ловити синтаксичні помилки(SyntaxError)

try {
    // setTimeout(function () {
    //     LALALALLA;
    // },1000)
} catch (err) {
    console.log("Block Catch");
    console.log(err);
}
console.log("This line runs");

//Event - об'єкт з інформацією про елемент з який відбулась подія
const title = document.querySelector('.new-below h1');
console.log(title);

title.addEventListener('click', function (event) {
    //console.log(event) 
    console.log(event.target);//властивість, яка вказує на об'єкт, де відбулась подія
    console.log(event.type);//тип події
    console.log(event.currentTarget);//властивість, яка вказує на об'єкт, до якого було підключено обробнийк події
    //event.target може вказувати на дочірній елемент
    console.log(event.timeStamp);//скільки мілісекунд 
});

        /* linear Стала швидкість від початку і до кінця ефекту.
        ease Анімація починається повільно, потім прискорюється і до кінця руху знову сповільнюється. 
        Аналогічно cubic-bezier (0.25, 0.1, 0.25, 1). 
        Без задання. ease-in Анімація починається повільно, а до кінця прискорюється. 
        Аналогічно cubic-bezier(0.42, 0, 1, 1).
        ease-out Анімація починається швидко, а до кінця сповільнюється. 
        Аналогічно cubic-bezier(0, 0, 0.58, 1). 
        ease-in-out Анімація починається і закінчується повільно. 
        Аналогічно cubic-bezier(0.42, 0, 0.58, 1). step-start Анімації немає. 
        Стильові властивості відразу ж приймають кінцеве значення. 
        step-end Як такої анімації немає. 
        Початкове значення перебуває в початковому значенні увесь час переходу і в останнівй момент приймає кінцеве значення. 
        steps(int, start|end) Ступінчаста функція, що має задане число кроків. 
        cubic-bezier(n, n, n, n) Задає функцію руху у вигляді кривої Безьє. 
        initial Встановлює властивість у значення без задання inherit Вказує на спадковість властивості від свого батьківського елемента. */
        