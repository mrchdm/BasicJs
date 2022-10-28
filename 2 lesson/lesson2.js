// //условия иф элс варианты написания
// let goodsCound = 10;
// if (goodsCound > 0) {
//     console.log('количество товаров: ', goodsCound);
// }
// else {
//     console.log('товаров нет');
// }

// if (goodsCound > 0) console.log('количество товаров: ', goodsCound);
// else console.log('товаров нет');

// goodsCound > 0
//     ? console.log('количество товаров: ', goodsCound)
//     : console.log('товаров нет')

// const goodsInfoText = goodsCound > 0
//     ? `количество товаров: ${goodsCound}`
//     : 'товаров нет';

// console.log(goodsInfoText);

// //Аналог элс иф
// let fruit = 'Mango';
// switch (fruit) {
//     case 'Bananas':
//         console.log('50');
//         break;  //если мы не поставим здесь break, мы будем проваливаться дальше до следующего break
//     case 'Mango':
//         console.log('70');
//         break;
//     case 'Apple':
//     case 'Pineapple': // Аналог или ||
//         console.log('60');
//         break;
//     default:
//         console.log('noname'); //аналог элс, если нам ни один из вариантов не подошел
// }


// function getFruitPrice(fruit) {
//     switch (fruit) {
//         case 'Bananas': return 70
//         case 'Mango': return 99;
//         case 'Apple': return 80;
//         case 'Pineapple': return 60;
//         default: return null; //отсутствие какого-то значения обычно интерпретируют как null , неизвестный фрукт
//     }
// }
// let price = getFruitPrice('Mang');
// console.log(price)

//Задача. Вывести последовательность чисел от 1 до n через рекурсию
function recursion(x) {
    if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое положительное число';
    if (x === 1) return '1';
    return recursion(x - 1) + ' ' + x; //если x=3, то слева мы прибавим x - 1, то есть 2
}
console.log(recursion(5));

// Игра, где пользователь должен угадать число
function reset() {
    attempts = 0;
    number = Math.floor(Math.random() * 100); //генириуем целое рандомное число без дробной части
    console.log(number);
}

function tryGuessNumber() {
    const userAnswer = parseInt(prompt('Введите число от 0 до 100, для выхода наберите -1'));
    if (userAnswer === -1) return alert('Game Over');

    if (isNaN(userAnswer)) {
        alert('Необходимо ввести число от 1 до 100');
        tryGuessNumber();
        return; // здесь надо вызвать, чтобы не было непредсказуемого поведения
    }

    attempts++; //добавляем попытку после неудачной
    if (userAnswer > number) {
        alert('Введите число поменьше')
    } else if (userAnswer < number) {
        alert('Введите число побольше')
    } else {
        alert(`Поздравляем! Вы угадали число с ${attempts} попытки`);

        if (!confirm('Хотите сыграть еще раз?')) { //окошечко с да, нет, возвращает то, что мы выбрали
            return alert('Game Over')
        }

        reset() //сбрасываем игру. Эту функцию описали выше
    }

    tryGuessNumber();
}

reset();
tryGuessNumber();