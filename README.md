<!-- Логика на JS -->

let available = 27; // Доступно днів
let used = 12; // Використано днів
const remaining = available - used; // Залишилось днів

const maxNotDivide = 14;
const maxDivide = 13;
const totalMax = maxNotDivide + maxDivide; // 27

let isUsedNotDivide = false;
let isUsedDivide = false;

let NotDivide = 0;
let Divide = 0;
let NotDivide_Alt = 0;
let Divide_Alt = 0;

function ca2(available, used, remaining) {
let isUsedNotDivide = false;
let isUsedDivide = false;

const basicInformation = `Всього на рік надається ${totalMax} днів відпустки.  Із них ${maxNotDivide} можна використати тільки неподільно підряд, ${maxDivide} як завгодно.`;
let message = "";

if (used >= maxNotDivide) {
isUsedNotDivide = true;
}

if (used === maxDivide || used === totalMax) {
isUsedDivide = true;
}

if (available === 0) {
message = "у тебе ще немає доступних днів відпустки";
} else if (isUsedNotDivide && isUsedDivide) {
message = "Ти вже використав всю відпустку";
} else if (remaining === 0) {
message = "Ще немає доступних днів відпустки";
} else if (!isUsedNotDivide && isUsedDivide) {
NotDivide = remaining;

    if (NotDivide === maxNotDivide) {
      message = `Можешь використати ${NotDivide} днів неподільної відпустки. Подільна відпустка вже вся використана.`;
    } else {
      message = `Є ${NotDivide} днів неподільної відпустки. Достатньо накопити ще ${
        maxNotDivide - NotDivide
      } днів для використання ${maxNotDivide} днів неподільної відпустки. Подільна відпустка вже вся використана. `;
    }

} else if (isUsedNotDivide && !isUsedDivide) {
Divide = remaining;

    message = `Можешь використати ${Divide} днів подільної відпустки. Неподільна відпустка вже вся використана.`;

} else if (!isUsedNotDivide && !isUsedDivide) {
NotDivide_Alt = maxNotDivide;
Divide_Alt = remaining - NotDivide_Alt;

    if (available <= maxDivide) {
      Divide = remaining;
      message = `Можешь використати ${Divide} днів подільної відпустки.`;
    } else if (
      available > maxDivide &&
      remaining >= maxNotDivide &&
      Divide !== Divide_Alt
    ) {
      Divide = maxDivide - used;
      NotDivide = remaining - Divide;

      message = `Доступно для використання ${NotDivide_Alt} днів неподільної відпустки і ${Divide_Alt} днів подільної відпустки. АБО можешь використати ${Divide} днів подільної відпустки. Залишиться ${NotDivide} днів неподільної відпустки для використання якої потрібно накопити ${maxNotDivide} днів.`;
    } else if (
      available > maxDivide &&
      remaining >= maxNotDivide &&
      Divide === Divide_Alt
    ) {
      Divide = maxDivide - used;
      NotDivide = remaining - Divide;
      message = `Доступно для використання ${NotDivide_Alt} днів неподільної відпустки і ${Divide_Alt} днів подільної відпустки.`;
    } else if (available > maxDivide && remaining < maxNotDivide) {
      Divide = maxDivide - used;
      NotDivide = remaining - Divide;
      message = `Можешь використати ${Divide} днів подільної відпустки. Залишиться ${NotDivide} днів неподільної відпустки для використання якої потрібно накопити ${maxNotDivide} днів.`;
    }

} else {
message = "Щось пішло не так";
}
console.log(message);
return message;
}

ca2(available, used, remaining);
