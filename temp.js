// Шестнадцатеричная система счисления
// Для записи шестнадцатеричного числа в начале записи числа напишите 0x.
const example16NumberSystem = 0xabf0c;
console.log(example16NumberSystem);

// Двоичная система
// Для записи двоичного числа в начале записи числа напишите 0b.
const example2NumberSystem = 0b101;
console.log(example2NumberSystem);

// Восьмеричная система счисления
// Для записи восьмеричного числа в начале записи числа напишите 0.
const example8NumberSystem = 077;
console.log(example8NumberSystem);

// Infinity и NaN
// Infinity представляет собой значение «бесконечность».
console.log(1 * Infinity);
console.log(-1 * Infinity);
console.log(-1 * -Infinity);
console.log(Infinity * Infinity);
console.log(2 + Infinity);

console.log(Infinity / Infinity);
console.log(Infinity * 0);
console.log(Infinity - Infinity);
console.log(1 ** Infinity);

console.log(Infinity ** 0);
console.log(1 / Infinity);

// Для проверки, является ли значение бесконечностью, можно использовать метод isFinite()
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));
console.log(isFinite(5));
// -> false
// -> false
// -> true

// NaN является значением «не число». NaN не является математическим термином, в отличие от бесконечности. 
// Его значение, скорее, ближе к понятию «число невозможно определить».

const examplePosInfinity = 1 / 0;
const exampleNegInfinity = -1 / 0;
const exampleNaN = 0 / 0;
console.log(examplePosInfinity);
console.log(exampleNegInfinity);
console.log(exampleNaN);
// -> Infinity
// -> -Infinity
// -> NaN

// Для проверки, является ли значение равным NaN, можно использовать метод isNaN():
console.log(isNaN(NaN));
console.log(isNaN(5));
// -> true
// -> false

// Два нуля
const posZero = 0;
const negZero = -0;
console.log(posZero);
console.log(negZero);
// -> 0
// -> -0

// BigInt
//BigInt — это встроенный объект, который даёт возможность представлять целые числа больше 253 - 1 
// (наибольшего числа, которое JavaScript может надёжно представить примитивом)
// BigInt создаётся путем добавления n в конец числа или вызовом функции BigInt():
const bigNumber = 100000000000000001;
console.log(bigNumber);
const bigBigintLetter = 100000000000000001n;
console.log(bigBigintLetter);
const bigBigintFunc = BigInt('100000000000000001');
console.log(bigBigintFunc);
// -> 100000000000000000
// -> 100000000000000001n
// -> 100000000000000001n

// Задание 7.2.1
console.log('Задание 7.2.1');
const h = 1.2e1;
console.log(h);


console.log('Числа');
//toString()
// Метод toString() позволяет преобразовать число в текстовую форму.
const a = 30;
console.log(a.toString());
console.log(a.toString(2));
console.log(a.toString(8));
console.log(a.toString(16));
console.log(a.toString(3));
console.log(a.toString(36));
// -> 30
// -> 11110
// -> 36
// -> 1e
// -> 1010
// -> u

// parseInt()
// parseInt() является обратной по отношению к toString() операцией, преобразование текстовых данных в число:
console.log(parseInt('30'));
console.log(parseInt('11110', 2));
console.log(parseInt('36', 8));
console.log(parseInt('1E', 16));
console.log(parseInt('1010', 3));
console.log(parseInt('U', 36));
// -> 30
// -> 30
// -> 30
// -> 30
// -> 30
// -> 30

//parseFloat()
// Функция parseFloat() принимает строку в качестве аргумента и возвращает десятичное число (число с плавающей точкой).
// В отличие от метода parseInt(), parseFloat() работает только в десятичной системе счисления.

// toFixed()
// Аргумент toFixed() задаёт количество знаков после запятой. 
// Если аргумент не указан, то берётся значение по умолчанию — ноль. 
// Значением аргумента может быть число от 1 до 100.

/*
const PI = 3.1415926;
console.log(PI.toFixed());
console.log(PI.toFixed(2));
console.log(PI.toFixed(4));
console.log(PI.toFixed(10));
console.log((PI * 100).toFixed(2));
*/
// -> 3
// -> 3.14
// -> 3.1416
// -> 3.1415926000
// -> 314.16

// toPrecision()
// Аргумент toPrecision() задаёт количество значимых знаков. 
// Если аргумент не указан, то toPrecision() возвращает то же значение, что и toString(). 
// Значением аргумента может быть число от 1 до 100.
const PI = 3.1415926;
console.log(PI.toPrecision());
console.log(PI.toPrecision(2));
console.log(PI.toPrecision(4));
console.log(PI.toPrecision(10));
console.log((PI * 100).toPrecision(2));
// -> 3.1415926
// -> 3.1
// -> 3.142
// -> 3.141592600
// -> 310

// Неточные вычисления
console.log('Неточные вычисления');
console.log(0.2 + 0.1); 

// Задание 7.3.2
console.log('Задание 7.3.2');
console.log(0 + -0 === 0 * -0); 
console.log(3e400 + 5e400 === 8e400);
console.log(3e400 + 5e400 === 8e800);
console.log(3e40 + 2e40 === 5e40);
console.log(3e40 + 2e40 === 5e80);
console.log(5e1000 - 5e1000 == NaN);
console.log(5e1000 - 5e1000 == 0);
console.log(5e1000 - 5e1000 == -0);
console.log('Задание 7.3.3');
console.log(2 * 2 ** 2 * (2 * 2) ** 2 - 2 + 2 * 2 + 2 ** - 2);
console.log('Задание 7.3.4');
const z = 12267008831;
console.log(z.toString(30));
console.log(parseInt('12267008831', 30));
console.log('Расстояние между точками a(-2,7) b(3,-2)');
console.log(Math.sqrt((3 - -2) ** 2 + (-2 - 7) ** 2));
console.log('Объём шара радиусом 6371');
console.log(Math.round((4 / 3) * Math.PI * Math.pow(6371, 3)));

// 7.5. Строки
console.log(`многострочные тексты в переменные`);
const greeting = `Привет,
Антон`;
console.log(greeting);
// -> Привет,
// -> Антон

console.log(`Запись в обратных кавычках позволяет делать вставки переменных`);
const name = 'Антон';
const greetingNew = `Привет, ${name}!`;
console.log(greeting);
// -> Привет, Антон!

// Запись в обратных кавычках называют шаблонными строками

console.log(`\u{1F609}`);

console.log(`${'Полицейский'} за рулём, я чиню парашют, ${"медсестра"} успокаивает нас пением.`);

// Длина строки
console.log('Длина строки \n У любой строки есть свойство "length", в которой хранится длина строки.');
console.log('У любой строки есть свойство length'.length);
// -> 35

// Конкатенация
console.log('Конкатенация \n С помощью символа + \n С использованием шаблонных строк.');

const firstName = "Александр";
const patronomic = "Сергеевич";
const surname = "Пушкин";
const year = "1799";
console.log(firstName + " " + patronomic + " " + surname + " родился в " + year + " году.");
console.log(`${firstName} ${patronomic} ${surname} родился в ${year} году.`);
// -> Александр Сергеевич Пушкин родился в 1799 году.
// -> Александр Сергеевич Пушкин родился в 1799 году.

// Преобразование символов в код
console.log('Преобразование символов в код \n Для получения кода символа используется метод "charCodeAt():"');
console.log('Антон'.charCodeAt(0));
// -> 1040
console.log('Для получения символа по коду можно использовать метод "fromCharCode()" объекта String:');
console.log(String.fromCharCode(1040));
// -> А

// Изменение регистра
console.log('Для изменения регистра в JavaScript существует два метода: \n "toUpperCase()" — для преобразования в верхний регистр. \n "toLowerCase()" — для преобразования в нижний регистр.');
const changeCaseExample = "ПлЯшУщИе БуКвЫ";
console.log(changeCaseExample.toUpperCase());
console.log(changeCaseExample.toLowerCase());
console.log(changeCaseExample);
// -> ПЛЯШУЩИЕ БУКВЫ
// -> пляшущие буквы
// -> ПлЯшУщИе БуКвЫ

let fantasyGen = "Жил-был объект А. "
fantasyGen += "И был у него объект Б.\n"
fantasyGen += "Однажды думает объект А: "
fantasyGen += "\"А не пойти ли мне объект В? "
fantasyGen += "Продам объект Б и куплю себе объект Г.\"\n"
fantasyGen += "И пошёл объект А объект В.\n"
fantasyGen += "И продал объект Б, и купил объект Г.\n"
fantasyGen += "И вернулся объект А домой.\n"
fantasyGen += "Конец."

let firstFantasy = fantasyGen;
firstFantasy = firstFantasy.replace(/объект А/g, 'старик');
firstFantasy = firstFantasy.replace(/объект Б/g, 'кисет');
firstFantasy = firstFantasy.replace(/объект В/g, 'на рынок');
firstFantasy = firstFantasy.replace(/объект Г/g, 'мотоцикл');

let secondFantasy = fantasyGen;
secondFantasy = secondFantasy.replace(/объект А/g, 'Антон');
secondFantasy = secondFantasy.replace(/объект Б/g, 'волшебный шкаф');
secondFantasy = secondFantasy.replace(/объект В/g, 'к царю');
secondFantasy = secondFantasy.replace(/объект Г/g, 'неволшебный шкаф');

console.log(firstFantasy);
console.log(secondFantasy);

// Задание 7ю6ю1
console.log('Задание 7.6.1');
const text = "И ушёл колобок от бабушки";

console.log('\u043C' + 'панама'.slice(-3));





