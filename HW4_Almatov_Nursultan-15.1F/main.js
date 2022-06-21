let num = 0;

let input = document.getElementById('content');

const plus = document.getElementById('plus_btn');
const minus = document.getElementById('minus_btn');

plus.onclick = () => {
    num += 1
    input.value = num
}
minus.onclick = () => {
    num -= 1
    input.value = num
}