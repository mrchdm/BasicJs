// 4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.

let b = Math.floor(Math.random() * 16); //Генирируем случайное число от 1 до 15

let a = 12
switch (a) {
    case 12:
        console.log(a);
        a += 1;
    case 13:
        console.log(a);
        a += 1;
    case 14:
        console.log(a);
        a += 1;
    case 15:
        console.log(a);
        break;
}
