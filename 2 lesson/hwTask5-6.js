// 5. Реализовать основные 4 арифметические операции
// в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function mult(a, b) {
    return a * b;
}

function diff(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function sum(a, b) {
    return a + b;
}

// 6. Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций 
// (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'Сложение': return sum(arg1, arg2);
        case 'Вычитание': return diff(arg1, arg2);
        case 'Умножение': return mult(arg1, arg2);
        case 'Деление': return div(arg1, arg2);
    }
}

console.log(mathOperation(2, 4, 'Сложение'));