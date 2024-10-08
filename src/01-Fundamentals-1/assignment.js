/* eslint-disable eqeqeq */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-useless-concat */
/* eslint-disable prefer-template */
// 1. Lecture values and variables
/*--------------------------------------------------------*/
console.log(' 1. Lecture values and variables');
const country = 'Vietnam';
const continent = 'Asia';
let population = 97.47; // million

console.log(country);
console.log(continent);
console.log(population);

// 2. Lecture: Data types
/*--------------------------------------------------------*/
console.log('2. Lecture: Data types');
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// 3. Lecture: let, const and var
/*--------------------------------------------------------*/
/* Description:
 * try to change one of the changed variable and observe what happpens
 */
console.log('3. Lecture: let, const and var');
language = 'Vietnamese';
// isIslandNew = true; // happens error

/*--------------------------------------------------------*/
const currentYear = new Date().getFullYear();
const birthdayJonas = 1989;
const birthdaySarah = 1986;
const ageJonas = currentYear - birthdayJonas;
const ageSarah = currentYear - birthdaySarah;
const isFulAge = ageJonas >= 18;

console.log(`Jonas's age ${ageJonas}`);
console.log(`Sarah's age ${ageSarah}`);
console.log(`Jonas is younger than Sarah: ${ageJonas < ageSarah}`);
console.log(`Jonas is full age: ${isFulAge}`);

// 4. Lecture: Basic Operators
/*----------------------------------------------------------------*/
console.log('4. Lecture: Basic Operators');
// 4.1
const halfPopulation = population / 2;
console.log(`${halfPopulation} million people would live in each half.`);

// 4.2
const increasePopulation = population * 1000000 + 1;
console.log(`${country} population increase 1 people ${increasePopulation}`);

// 4.3
const finlandPopulation = 6;
if (population > finlandPopulation) {
    console.log(`${country} have more people than Finland.`);
} else {
    console.log(`Finland have more people than ${country}`);
}

// 4.4
const avaragePopulation = 33; // million
if (population < avaragePopulation) {
    console.log(`${country} have less than the average population.`);
} else {
    console.log(`${country} have more then the avarage population.`);
}

// 4.5
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// 5. Lecture: Strings and Template Literals
/*----------------------------------------------------------------*/
console.log('5. Strings and Template Literals');
const newDescription = `${country} is in ${continent}, and its ${population} million people speak ${language};`;
console.log(newDescription);

// 6. Lecture: Taking devicions: if/ else statements
/*----------------------------------------------------------------*/
console.log('6. Taking decisions: if/ else statements');

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license.');
} else {
    console.log(`Sarah is too young. Wait another ${18 - age} years :)`);
}

if (population > 33) {
    console.log(`${country} population is above average`);
} else {
    console.log(`${country} is ${33 - population} million below average`);
}

// 7. Type conversion and coercion
/*----------------------------------------------------------------*/
console.log('7. Type conversion and coercion');

// 7.1 Type conversion
const inputYear = '1989';
console.log(inputYear, Number(inputYear));
console.log(inputYear + 18);
console.log(Number('Jonas'));
console.log(String(23), 23);

// 7.2 type coercion
// eslint-disable-next-line prefer-template
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log(('23' * '2') / '2' - '3');

// Assignment - presict then execute the operations
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// 8. Truthy and falsy values
// ----------------------------------------------------------------
console.log('8. Truthy and falsy values');
console.log('8.1 Falsy values');
// falsy values: false, 0 , -0, 0n, '', null, undefined, NaN
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(0n));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean([].length));

// All other values are considered truthy values.
console.log('8.2 Truthy values');
console.log(Boolean('false'));
console.log(Boolean('undefined'));
console.log(Boolean('0'));
console.log(Boolean([]));
console.log(Boolean({}));

const money = 0;
if (money) {
    console.log("Don't spend it all;");
} else {
    console.log('You should get a job!');
}

// 9. LECTURE: Equality Operators: == vs. ===
//----------------------------------------------------------------
console.log('9. Equality Operators');

const prompt = require('prompt-sync')();

// const numNeighbours = Number(prompt('How many neighbour countries does your country have? '));
const numNeighbours = 5;
if (numNeighbours === 1) console.log('Only 1 border!');
else if (numNeighbours > 1) console.log('More than one border');
else console.log('No borders');

// 10. Logical Operators
//----------------------------------------------------------------
// https://javascript.info/logical-operators
console.log('10. Logical Operators');
// Note: ! > && > ||

console.log('10.1 !(NOT)');

console.log(null);
console.log(!null);
console.log(!!null);

console.log('10.2 && (AND)');
console.log(1 && 2 && null && 3);
console.log(1 && 2 && 3);

const person = {
    name: 'Tham',
    age: 34
};
console.log(person.age > 18 && `${person.name} is allowed driving`);

console.log('10.3 || (OR)');
console.log(undefined || null || 0);
console.log(null || (2 && 3) || 4);

// OR Getting the first truthy value from a list of variables or expressions.
const fullName = '';
const nickName = 'Coder';
console.log(fullName || nickName || 'Anonymous');

// Short-circuit evaluation.
console.log(person.job || 'unemployed');
const str = 'Hello World!';
const search = 'World';
console.log(search != null && str.toLowerCase().includes(search.toLowerCase()) && 'Found');

// NOTE: Don’t replace if with || or &&
const x = 1;
x > 0 && console.log('Greater than zero!'); // "shorter way to write if".
if (x > 0) console.log('Greater than zero!'); // IF is more obvious and tends to be a little bit more readable.

//----------------------------------------------------------------
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

// Lecture: the switch statement
//--------------------------------------------------------
console.log(`
11. Switch statement`);

language = 'english';
let text;
switch (language) {
    case 'chinese':
    case 'mandarin':
        text = 'MOST number of native speakers!';
        break;
    case 'spanish':
        text = '2nd place in number of native speakers';
        break;
    case 'english':
        text = '3rd place';
        break;
    case 'hindi':
        text = 'Number 4';
        break;
    case 'arabic':
        text = '5th most spoken language';
        break;
    default:
        text = 'Great language too :D';
}
console.log(text);

//----------------------------------------------------------------
console.log(`
12. Expressions vs statements`);
/*
Expressions => return a value
Statements => complete task instruction.
*/
let a;
const b = 7;

console.log('12.1 Expressions');
console.log('1 + 1; ');
console.log(`'Hello' + ' ' + 'World';`);
console.log('a===20 && b===30');
console.log(`'hello world';`);
console.log('Object.assign({}, { answer: 42 })');
console.log('b >= 0 ? b*2 : b ->', b >= 0 ? b * 2 : b); // expression - ternary operator

// statement
if (b >= 0) {
    a = b * 2;
} else {
    a = b;
}

//----------------------------------------------------------------
console.log(`
Ternary operator`);

const user = 'Bi';
const message = user ? `Welcome, ${user}!` : 'Welcome, Guest';
console.log(message);

const welcomeMessage = (learner) => (learner ? `Welcome, ${learner}!` : 'Welcome, Guest');
console.log(welcomeMessage());
console.log(welcomeMessage('Bi Beo'));

population = 13;
const msg = population > 33 ? 'above average' : 'below avarage';
console.log(`${country}'s population ${msg}`);

//------------------------------------------------------------------------------
console.log(`
Challenge 1`);
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** heightJohn;

console.log('BMIMark ', BMIMark);
console.log('BMIJohn ', BMIJohn);

const markHeigherBMI = BMIMark > BMIJohn;
console.log('Mark has a higher BMI than John ', markHeigherBMI);

// --------------------------------------------------------
console.log(`
Challenge 2`);
if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
} else {
    console.log(`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`);
}

// ----------------------------------------------------------------
console.log(`
Challenge 3`);
const scroreDolphins = (96 + 108 + 89) / 3;
const scroreKoalas = (88 + 91 + 110) / 3;
console.log(scroreDolphins, scroreKoalas);

if (scroreDolphins === scroreKoalas && scroreKoalas >= 100 && scroreDolphins >= 100) {
    console.log('Both win the trophy');
} else if (scroreDolphins > scroreKoalas && scroreDolphins >= 100) {
    console.log('Dolphins win the trophy ');
} else if (scroreKoalas > scroreDolphins && scroreKoalas >= 100) {
    console.log('Koalas win the trophy');
} else console.log('No team wins the trophy');

//----------------------------------------------------------------
console.log(`
Challenge 4`);
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
