function numbers(num_1, num_2) {
    if (num_1 < num_2) {
        console.log("Первое число меньше!")
    } else if (num_2 < num_1) {
        console.log("Второе число меньше!")
    } else {
        console.log("Числа равны")
    }
}

numbers(prompt("Первое число:"), prompt("Второе число:"))

function countChar(c) {
    console.log("Длина аргумента:" + " " + c.length)
}

countChar("argument")