// 8. * С помощью рекурсии организовать функцию возведения числа в степень.
//     Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    if (pow != 1) {
        return val *= power(val, pow - 1);
    }
    else {
        return val;
    }
}

console.log(power(2, 4));

// function pow(x, n) {
//     if (n != 1) {
//         return x *= pow(x, n - 1);
//     } else {
//         return x;
//     }
// }
// console.log(pow(2, 3)); // 8