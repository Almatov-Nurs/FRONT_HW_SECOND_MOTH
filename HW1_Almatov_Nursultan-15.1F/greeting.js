const name = prompt("Введите имя!");

console.log("Привет", name)

let massive1 = [1, 2, 3]

let massive2 = [1, 2, 3, 4]

if (massive1.length > massive2.length) {
    console.log("Первый массив: " + massive1.length, ">", massive2.length + " :Второй массив")
} else if (massive1.length < massive2.length) {
    console.log("Первый массив: " + massive1.length, "<", massive2.length + " :Второй массив")
} else {
    console.log("Первый массив: " + massive1.length, "=", massive2.length + " :Второй массив")
}

const ans = prompt("Введите цвет светофора (green, yellow, red)");

switch (ans) {
    case "green":
        alert("Можно ехать!")
        break
    case "yellow":
        alert("Готовтесь!")
        break
    case "red":
        alert("Нельзя ехать!")
        break
}

const ind = [[[5]]]

console.log(ind[0][0][0])