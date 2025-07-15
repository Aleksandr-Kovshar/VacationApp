import React, { useState } from "react";
import "./VacationApp.css";

export default function VacationApp() {
  const maxNotDivide = 14;
  const maxDivide = 13;
  const totalMax = maxNotDivide + maxDivide;

  const [available, setAvailable] = useState(0);
  const [used, setUsed] = useState(0);
  const remaining = available - used;

  const basicInformation = `Всього на рік надається ${totalMax} днів відпустки. Із них ${maxNotDivide} можна використати тільки неподільно підряд, ${maxDivide} як завгодно.`;

  const ca2 = (available, used, remaining) => {
    let isUsedNotDivide = false;
    let isUsedDivide = false;

    let NotDivide = 0;
    let Divide = 0;
    let NotDivide_Alt = 0;
    let Divide_Alt = 0;

    if (used >= maxNotDivide) isUsedNotDivide = true;
    if (used === maxDivide || used === totalMax) isUsedDivide = true;

    if (available === 0) return "у тебе ще немає доступних днів відпустки";
    if (isUsedNotDivide && isUsedDivide)
      return "Ти вже використав всю відпустку";
    if (remaining === 0) return "Ще немає доступних днів відпустки";

    if (!isUsedNotDivide && isUsedDivide) {
      NotDivide = remaining;
      if (NotDivide === maxNotDivide)
        return `Можешь використати ${NotDivide} днів неподільної відпустки. Подільна відпустка вже вся використана.`;
      else
        return `Є ${NotDivide} днів неподільної відпустки. Достатньо накопити ще ${
          maxNotDivide - NotDivide
        } днів для використання ${maxNotDivide} днів неподільної відпустки. Подільна відпустка вже вся використана. `;
    }

    if (isUsedNotDivide && !isUsedDivide) {
      Divide = remaining;
      return `Можешь використати ${Divide} днів подільної відпустки. Неподільна відпустка вже вся використана.`;
    }

    if (!isUsedNotDivide && !isUsedDivide) {
      Divide = maxDivide - used;
      NotDivide_Alt = maxNotDivide;
      Divide_Alt = remaining - NotDivide_Alt;

      if (available <= maxDivide) {
        Divide = remaining;
        NotDivide = remaining - Divide;
        return `Можешь використати ${Divide} днів подільної відпустки.`;
      } else if (
        available > maxDivide &&
        remaining >= maxNotDivide &&
        Divide !== Divide_Alt
      ) {
        Divide = maxDivide - used;
        NotDivide = remaining - Divide;
        return `Доступно для використання ${NotDivide_Alt} днів неподільної відпустки і ${Divide_Alt} днів подільної відпустки. АБО можешь використати ${Divide} днів подільної відпустки. Залишиться ${NotDivide} днів неподільної відпустки для використання якої потрібно накопичити ${maxNotDivide} днів.`;
      } else if (
        available > maxDivide &&
        remaining >= maxNotDivide &&
        Divide === Divide_Alt
      ) {
        Divide = maxDivide - used;
        NotDivide = remaining - Divide;
        return `Доступно для використання ${NotDivide_Alt} днів неподільної відпустки і ${Divide_Alt} днів подільної відпустки.`;
      } else if (available > maxDivide && remaining < maxNotDivide) {
        Divide = maxDivide - used;
        NotDivide = remaining - Divide;
        return `Можешь використати ${Divide} днів подільної відпустки. Залишиться ${NotDivide} днів неподільної відпустки для використання якої потрібно накопити ${maxNotDivide} днів.`;
      }
    }

    return "Щось пішло не так";
  };

  return (
    <div className="vacation-container">
      <h2>Розрахунок відпустки</h2>
      <p className="info">{basicInformation}</p>
      <div className="inputs">
        <label>
          Доступно:
          <input
            type="number"
            min="0"
            max="27"
            value={available}
            onChange={(e) => {
              const val = Number(e.target.value);
              setAvailable(val > 27 ? 27 : val);
              if (used > val) setUsed(val); // keep used ≤ available
            }}
          />
        </label>
        <label>
          Використано:
          <input
            type="number"
            min="0"
            max={available}
            value={used}
            onChange={(e) => {
              const val = Number(e.target.value);
              setUsed(val > available ? available : val);
            }}
          />
        </label>
        <label>
          Залишилось:
          <input type="number" value={remaining} readOnly />
        </label>
      </div>
      <div className="result">{ca2(available, used, remaining)}</div>
    </div>
  );
}
