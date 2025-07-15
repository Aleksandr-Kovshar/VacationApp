import React, { useState, useEffect } from "react";
import "./VacationCalculator.css";

// export default function VacationСalculator() {
//   const [available, setAvailable] = useState(27);
//   const [used, setUsed] = useState(0);
//   const [remaining, setRemaining] = useState(27);
//   const [result, setResult] = useState("");

//   const available_max = 27;
//   const used_max = 27;
//   const remaining_max = 27;
//   const available_divide_max = 13;
//   const used_divide_max = 13;
//   const remaining_divide_max = 13;
//   const available_notdivide_max = 14;
//   const used_notdivide_max = 14;
//   const remaining_notdivide_max = 14;

//   const calculate = () => {
//     let remaining_divide = 0;

//     if (available === available_max && used === 0) {
//       return setResult(
//         `Можна використати ${remaining_notdivide_max} днів неподільної і ${remaining_divide_max} подільної відпустки.`
//       );
//     }

//     if (available === 0) {
//       return setResult("У тебе ще немає відпустки");
//     }

//     if (used === used_max) {
//       return setResult(`Всі ${available_max} днів відпустки вже використано`);
//     }

//     if (
//       used >= used_notdivide_max &&
//       remaining === 0 &&
//       available < available_max
//     ) {
//       return setResult(
//         `Всі ${available_notdivide_max} неподільної відпустки вже використано. Подільної відпустки ще немає.`
//       );
//     }

//     if (
//       used >= used_notdivide_max &&
//       remaining !== 0 &&
//       available <= available_max
//     ) {
//       remaining_divide = remaining;
//       return setResult(
//         `Всі ${available_notdivide_max} неподільної відпустки вже використано. Доступно ${remaining_divide} днів подільної відпустки.`
//       );
//     }

//     if (remaining > remaining_notdivide_max && used < used_divide_max) {
//       remaining_divide = remaining - remaining_notdivide_max;
//       return setResult(
//         `Можна використати ${remaining_notdivide_max} днів неподільної і ${remaining_divide} подільної відпустки.`
//       );
//     }

//     if (
//       remaining === remaining_notdivide_max &&
//       available < available_max &&
//       used < used_divide_max
//     ) {
//       return setResult(
//         `Можна використати ${remaining_notdivide_max} днів неподільної відпустки.`
//       );
//     }

//     if (remaining === remaining_notdivide_max && available === available_max) {
//       return setResult(
//         `Залишилось тільки ${remaining_notdivide_max} днів неподільної відпустки.`
//       );
//     }

//     if (remaining > 0 && used === used_divide_max) {
//       return setResult(
//         `Є ${remaining} днів неподільної відпустки. Для використання потрібно накопичити ${remaining_notdivide_max} днів.`
//       );
//     }
//     if (remaining > 0 && used === used_divide_max) {
//       return setResult(
//         `Є ${remaining} днів неподільної відпустки. Для використання потрібно накопичити ${remaining_notdivide_max} днів.`
//       );
//     }
//     if (available > 0 && available <= available_divide_max && remaining !== 0) {
//       return setResult(`Є ${remaining} днів подільної відпустки`);
//     }

//     return setResult("Немає специфічної інформації за такими умовами.");
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "600px",
//         margin: "40px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//       }}
//     >
//       <h2>Розрахунок відпустки</h2>
//       <div
//         style={{
//           display: "flex",
//           gap: "15px",
//           alignItems: "center",
//           marginTop: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         <label
//           style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
//         >
//           Доступно днів
//           <input
//             type="number"
//             value={available}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= 27) setAvailable(val);
//             }}
//             max={27}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <label
//           style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
//         >
//           Використано днів
//           <input
//             type="number"
//             value={used}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= 27) setUsed(val);
//             }}
//             max={27}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <label
//           style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}
//         >
//           Залишилось днів
//           <input
//             type="number"
//             value={remaining}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= 27) setRemaining(val);
//             }}
//             max={27}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <button
//           onClick={calculate}
//           style={{
//             height: "32px",
//             padding: "0 16px",
//             cursor: "pointer",
//             marginTop: "22px",
//           }}
//         >
//           Розрахувати
//         </button>
//       </div>
//       {result && (
//         <div
//           style={{
//             backgroundColor: "#f5f5f5",
//             padding: "10px",
//             borderRadius: "5px",
//             marginTop: "20px",
//             minHeight: "40px",
//           }}
//         >
//           {result}
//         </div>
//       )}
//     </div>
//   );
// }




// export default function VacationCalculator() {
//   const [available, setAvailable] = useState(27);
//   const [used, setUsed] = useState(0);
//   const [remaining, setRemaining] = useState(27);
//   const [result, setResult] = useState("");

//   // Максимуми
//   const notdivide_max = 14; // неподільних днів
//   const divide_max = 13;    // подільних днів
//   const available_max = 27;

//   // Функція з твоєю логікою з Excel формули:
//   function vacationMessage(available, used, remaining) {
//     if (available === 0) {
//       return "Немає відпустки";
//     }

//     if (used >= notdivide_max) {
//       return `Доступно ${remaining} подільних днів, неподільні 14 днів вже використані`;
//     }

//     if (used === divide_max) {
//       if (remaining === notdivide_max) {
//         return "Залишилось тільки 14 неподільних днім, можна їх використати";
//       } else {
//         return `Є ${remaining} неподільних дні, для користування має бути 14, залишилось накопичити ${notdivide_max - remaining} днів`;
//       }
//     }

//     if (remaining < notdivide_max) {
//       if (remaining < divide_max && remaining > used) {
//         return `Є ${remaining} подільних днів`;
//       } else {
//         const div_left = divide_max - used;
//         const notdiv_left = remaining - div_left;
//         if (available === available_max) {
//           return `Є ${div_left} подільних днів і 14 неподільних днів`;
//         } else {
//           return `Є ${div_left} подільних днів і ${notdiv_left} неподільних днів`;
//         }
//       }
//     }

//     return "Умови не співпадають з жодною логікою";
//   }

//   // Обробник кнопки "Розрахувати"
//   const calculate = () => {
//     const msg = vacationMessage(available, used, remaining);
//     setResult(msg);
//   };

//   return (
//     <div
//       style={{
//         maxWidth: "600px",
//         margin: "40px auto",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//       }}
//     >
//       <h2>Розрахунок відпустки</h2>
//       <div
//         style={{
//           display: "flex",
//           gap: "15px",
//           alignItems: "center",
//           marginTop: "20px",
//           flexWrap: "wrap",
//         }}
//       >
//         <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
//           Доступно днів
//           <input
//             type="number"
//             value={available}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= available_max) setAvailable(val);
//             }}
//             max={available_max}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
//           Використано днів
//           <input
//             type="number"
//             value={used}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= available_max) setUsed(val);
//             }}
//             max={available_max}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <label style={{ display: "flex", flexDirection: "column", fontSize: "14px" }}>
//           Залишилось днів
//           <input
//             type="number"
//             value={remaining}
//             onChange={(e) => {
//               const val = Number(e.target.value);
//               if (val >= 0 && val <= available_max) setRemaining(val);
//             }}
//             max={available_max}
//             min={0}
//             style={{ width: "80px", marginTop: "4px" }}
//           />
//         </label>

//         <button
//           onClick={calculate}
//           style={{ height: "32px", padding: "0 16px", cursor: "pointer", marginTop: "22px" }}
//         >
//           Розрахувати
//         </button>
//       </div>
//       {result && (
//         <div
//           style={{
//             backgroundColor: "#f5f5f5",
//             padding: "10px",
//             borderRadius: "5px",
//             marginTop: "20px",
//             minHeight: "40px",
//           }}
//         >
//           {result}
//         </div>
//       )}
//     </div>
//   );
// }



// export default function VacationCalculator() {
//   const [available, setAvailable] = useState(0);
//   const [used, setUsed] = useState(0);
//   const remaining = available - used;

//   const maxNotDivide = 14;
//   const maxDivide = 13;
//   const totalMax = maxNotDivide + maxDivide;

//   const [result, setResult] = useState("");

//   const calculate = () => {
//     let message = `Всього на рік надається ${totalMax} днів відпустки.  Із них ${maxNotDivide} можна використати тільки неподільно підряд, і ${maxDivide} як завгодно.`;

//     if (available === 0) {
//       message += "\nУ тебе ще намає відпустки";
//     } else if (available >= 1 && available <= maxDivide) {
//       if (used >= 0 && used < maxDivide) {
//         message += `\nМожна використати ${remaining} днів подільної відпустки.`;
//       } else if (used === maxDivide) {
//         message += `\nНемає доступних днів. Подільну відпустку використано. Потрібно накопичити ${maxNotDivide} днів для використання неподільної.`;
//       }
//     } else if (available === maxNotDivide) {
//       if (used === 0) {
//         message += `\nМожна використати ${maxNotDivide} днів неподільної або ${maxDivide} днів подільної і залишиться ${maxNotDivide - maxDivide} день неподільної.`;
//       } else if (used > 0 && used < maxDivide) {
//         message += `\nМожна використати ${maxDivide - used} днів подільної. Є ${remaining - (maxDivide - used)} неподільної, але потрібно накопичити ${maxNotDivide} днів.`;
//       } else if (used === maxDivide) {
//         message += `\nЄ ${remaining} днів неподільної, але потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`;
//       } else if (used === maxNotDivide) {
//         message += `\nНемає доступних днів. Неподільна відпустка використана.`;
//       }
//     } else if (available > maxNotDivide && available < totalMax) {
//       if (used === 0) {
//         message += `\nМожна використати ${maxNotDivide} днів неподільної і ${remaining - maxNotDivide} подільної.`;
//       } else if (used > 0 && used < maxDivide) {
//         message += `\nМожна використати ${maxNotDivide} днів неподільної і ${remaining - maxNotDivide} подільної.`;
//       } else if (used === maxDivide) {
//         message += `\nЄ ${remaining} днів неподільної, потрібно накопичити ${maxNotDivide} днів. Подільну використано.`;
//       } else if (used === maxNotDivide) {
//         message += `\nДоступно ${remaining} подільної. Неподільна використана.`;
//       } else if (used > maxNotDivide && used < totalMax) {
//         message += `\nДоступно ${remaining} подільної. Неподільна використана.`;
//       }
//     } else if (available === totalMax) {
//       if (used === 0) {
//         message += `\nДоступно ${maxDivide} подільної і ${maxNotDivide} неподільної.`;
//       } else if (used > 0 && used < maxDivide) {
//         message += `\nДоступно ${remaining - maxNotDivide} подільної і ${maxNotDivide} неподільної.`;
//       } else if (used === maxDivide) {
//         message += `\nДоступно ${maxNotDivide} неподільної. Подільна вичерпана.`;
//       } else if (used === maxNotDivide) {
//         message += `\nДоступно ${maxDivide} подільної. Неподільна вичерпана.`;
//       } else if (used > maxNotDivide && used < totalMax) {
//         message += `\nДоступно ${remaining} подільної. Неподільна вичерпана.`;
//       } else if (used === totalMax) {
//         message += `\nВся відпустка використана.`;
//       }
//     }

//     setResult(message);
//   };

//    return (
//     <div className="calculator-container">
//       <h2>Калькулятор відпустки</h2>
//       <div className="input-row">
//         <div className="input-group">
//           <label>Доступно</label>
//           <input
//             type="number"
//             value={available}
//             max={27}
//             onChange={(e) => setAvailable(Number(e.target.value))}
//           />
//         </div>
//         <div className="input-group">
//           <label>Використано</label>
//           <input
//             type="number"
//             value={used}
//             max={27}
//             onChange={(e) => setUsed(Number(e.target.value))}
//           />
//         </div>
//         <div className="input-group">
//           <label>Залишилось</label>
//           <input type="number" value={remaining} disabled />
//         </div>
//       </div>
//       <button onClick={calculate}>Отримати детальнішу інформацію</button>
//       {result && <pre className="result-box">{result}</pre>}
//     </div>
//   );
// }


// export default function VacationCalculator() {
//   const [available, setAvailable] = useState(27);
//   const [used, setUsed] = useState(0);
//   const [result, setResult] = useState("");

//   const maxNotDivide = 14;
//   const maxDivide = 13;
//   const totalMax = maxNotDivide + maxDivide;

//   const calculate = () => {
//     const remaining = available - used;

//     if (available === 0) {
//       return setResult("У тебе ще немає відпустки");
//     }

//     if (available >= 1 && available <= maxDivide) {
//       if (used < maxDivide) {
//         return setResult(`Можна використати ${remaining} днів подільної відпустки.`);
//       } else if (used === maxDivide) {
//         return setResult(
//           `Немає доступних днів відпустки. Подільну відпустку використано. Потрібно накопичити ${maxNotDivide} днів для використання неподільної відпустки.`
//         );
//       }
//     }

//     if (available === maxNotDivide) {
//       if (used === 0) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки. Або ${maxDivide} днів подільної, і залишиться ${maxNotDivide - maxDivide} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Можна використати ${maxDivide - used} днів подільної відпустки. І є ${
//             remaining - (maxDivide - used)
//           } днів неподільної, для використання яких потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Є ${remaining} день неподільної відпустки, для використання якого потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
//         );
//       }
//       if (used === maxNotDivide) {
//         return setResult(
//           `Немає доступних для використання днів відпустки. Неподільну відпустку використано.`
//         );
//       }
//     }

//     if (available > maxNotDivide && available < totalMax) {
//       if (used === 0) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки і ${remaining - maxNotDivide} подільної. ` +
//           `Або ${maxDivide} днів подільної, і залишиться ${remaining - maxDivide} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки і ${remaining - maxNotDivide} подільної. ` +
//           `Або ${maxDivide - used} днів подільної, і залишиться ${remaining - (maxDivide - used)} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Є ${remaining} днів неподільної відпустки, для використання яких потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
//         );
//       }
//       if (used === maxNotDivide || (used > maxNotDivide && used < totalMax)) {
//         return setResult(
//           `Доступно ${remaining} днів подільної відпустки. Неподільну відпустку використано.`
//         );
//       }
//       if (used === totalMax - 1) {
//         return setResult(
//           `Доступно ${remaining} днів подільної відпустки. Неподільну відпустку використано.`
//         );
//       }
//     }

//     if (available === totalMax) {
//       if (used === 0) {
//         return setResult(
//           `Доступно ${maxDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Доступно ${remaining - maxNotDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Доступно ${maxNotDivide} неподільної відпустки. Подільна відпустка вичерпана.`
//         );
//       }
//       if (used === maxNotDivide) {
//         return setResult(
//           `Доступно ${maxDivide} подільної відпустки. Неподільна відпустка вичерпана.`
//         );
//       }
//       if (used > maxNotDivide && used < totalMax) {
//         return setResult(
//           `Доступно ${remaining} подільної відпустки. Неподільна відпустка вичерпана.`
//         );
//       }
//       if (used === totalMax) {
//         return setResult(`Вся відпустка використана`);
//       }
//     }

//     return setResult("Немає специфічної інформації за такими умовами.");
//   };

//   return (
//     <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
//       <h2>Розрахунок відпустки</h2>
//       <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "20px" }}>
//         <label>
//           Доступно днів:
//           <input
//             type="number"
//             value={available}
//             onChange={(e) => setAvailable(Number(e.target.value))}
//             min={0}
//             max={27}
//           />
//         </label>
//         <label>
//           Використано днів:
//           <input
//             type="number"
//             value={used}
//             onChange={(e) => setUsed(Number(e.target.value))}
//             min={0}
//             max={27}
//           />
//         </label>
//         <button onClick={calculate}>Розрахувати</button>
//         {result && <div style={{ backgroundColor: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>{result}</div>}
//       </div>
//     </div>
//   );
// }

// export default function VacationCalculator() {
//   const [available, setAvailable] = useState(0);
//   const [used, setUsed] = useState(0);
//   const [result, setResult] = useState("");

//   const maxNotDivide = 14;
//   const maxDivide = 13;
//   const totalMax = maxNotDivide + maxDivide;

//   const calculate = () => {
//     const remaining = available - used;
//     if (available === 0) {
//       return setResult("У тебе ще немає відпустки");
//     }

//     if (available >= 1 && available <= maxDivide) {
//       if (used >= 0 && used < maxDivide) {
//         return setResult(`Можна використати ${remaining} днів подільної відпустки.`);
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Немає доступних днів відпустки. Подільну відпустку використано. Потрібно накопичити ${maxNotDivide} днів для використання неподільної відпустки.`
//         );
//       }
//     }

//     if (available === maxNotDivide) {
//       if (used === 0) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки. Або ${maxDivide} днів подільної, і залишиться ${maxNotDivide - maxDivide} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Можна використати ${maxDivide - used} днів подільної відпустки. І є ${remaining - (maxDivide - used)} неподільної, для використання яких потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Є ${remaining} день неподільної відпустки, для використання якого потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
//         );
//       }
//       if (used === maxNotDivide) {
//         return setResult(
//           `Немає доступних для використання днів відпустки. Неподільну відпустку використано.`
//         );
//       }
//     }

//     if (available > maxNotDivide && available < totalMax) {
//       if (used === 0) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки і ${remaining - maxNotDivide} подільної. Або ${maxDivide} днів подільної, і залишиться ${remaining - maxDivide} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Можна використати ${maxNotDivide} днів неподільної відпустки і ${remaining - maxNotDivide} подільної. Або ${maxDivide - used} днів подільної, і залишиться ${remaining - (maxDivide - used)} день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Є ${remaining} днів неподільної відпустки, для використання яких потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
//         );
//       }
//       if (used >= maxNotDivide && used < totalMax) {
//         return setResult(
//           `Доступно ${remaining} днів подільної відпустки. Неподільну відпустку використано.`
//         );
//       }
//     }

//     if (available === totalMax) {
//       if (used === 0) {
//         return setResult(
//           `Доступно ${maxDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
//         );
//       }
//       if (used > 0 && used < maxDivide) {
//         return setResult(
//           `Доступно ${remaining - maxNotDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
//         );
//       }
//       if (used === maxDivide) {
//         return setResult(
//           `Доступно ${maxNotDivide} неподільної відпустки. Подільна відпустка вичерпана.`
//         );
//       }
//       if (used === maxNotDivide) {
//         return setResult(
//           `Доступно ${maxDivide} подільної відпустки. Неподільна відпустка вичерпана.`
//         );
//       }
//       if (used > maxNotDivide && used < totalMax) {
//         return setResult(
//           `Доступно ${remaining} подільної відпустки. Неподільна відпустка вичерпана.`
//         );
//       }
//       if (used === totalMax) {
//         return setResult("Вся відпустка використана");
//       }
//     }

//     return setResult("Немає специфічної інформації за такими умовами.");
//   };

//   return (
//     <div className="calculator">
//       <h2>Розрахунок відпустки</h2>
//       <div className="inputs">
//         <label>
//           Доступно:
//           <input
//             type="number"
//             value={available}
//             max={27}
//             onChange={(e) => setAvailable(Number(e.target.value))}
//           />
//         </label>
//         <label>
//           Використано:
//           <input
//             type="number"
//             value={used}
//             max={27}
//             onChange={(e) => setUsed(Number(e.target.value))}
//           />
//         </label>
//         <label>
//           Залишилось:
//           <input
//             type="number"
//             value={used}
//             max={27}
//             onChange={(e) => setUsed(Number(e.target.value))}
//           />
//         </label>
//       </div>
//       <button onClick={calculate}>Розрахувати</button>
//       {result && <div className="result">{result}</div>}
//     </div>
//   );
// }



export default function VacationCalculator() {
  const maxNotDivide = 14;
  const maxDivide = 13;
  const totalMax = maxNotDivide + maxDivide;

  const [available, setAvailable] = useState(0);
  const [used, setUsed] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [result, setResult] = useState("");

  // При изменении available или used автоматически пересчитываем remaining
  useEffect(() => {
    let newRemaining = available - used;
    if (newRemaining < 0) {
      // если remaining отрицательный, исправим used
      setUsed(available);
      newRemaining = 0;
    }
    setRemaining(newRemaining);
  }, [available, used]);

  // Если изменяется remaining вручную, пересчитаем used
  const onRemainingChange = (val) => {
    let newRemaining = Math.min(Math.max(val, 0), available);
    setRemaining(newRemaining);
    setUsed(available - newRemaining);
  };

  const calculate = () => {
    if (available === 0) {
      return setResult("У тебе ще немає відпустки");
    }

    if (available >= 1 && available <= maxDivide) {
      if (used >= 0 && used < maxDivide) {
        return setResult(`Можна використати ${remaining} днів подільної відпустки.`);
      }
      if (used === maxDivide) {
        return setResult(
          `Немає доступних днів відпустки. Подільну відпустку використано. Потрібно накопичити ${maxNotDivide} днів для використання неподільної відпустки.`
        );
      }
    }

    if (available === maxNotDivide) {
      if (used === 0) {
        return setResult(
          `Можна використати ${maxNotDivide} днів неподільної відпустки. Або ${maxDivide} днів подільної, і залишиться ${
            maxNotDivide - maxDivide
          } день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
        );
      }
      if (used > 0 && used < maxDivide) {
        return setResult(
          `Можна використати ${maxDivide - used} днів подільної відпустки. І є ${
            remaining - (maxDivide - used)
          } неподільної, для використання яких потрібно накопичити ${maxNotDivide} днів.`
        );
      }
      if (used === maxDivide) {
        return setResult(
          `Є ${remaining} день неподільної відпустки, для використання якого потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
        );
      }
      if (used === maxNotDivide) {
        return setResult(
          `Немає доступних для використання днів відпустки. Неподільну відпустку використано.`
        );
      }
    }

    if (available > maxNotDivide && available < totalMax) {
      if (used === 0) {
        return setResult(
          `Можна використати ${maxNotDivide} днів неподільної відпустки і ${
            remaining - maxNotDivide
          } подільної. Або ${maxDivide} днів подільної, і залишиться ${
            remaining - maxDivide
          } день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
        );
      }
      if (used > 0 && used < maxDivide) {
        return setResult(
          `Можна використати ${maxNotDivide} днів неподільної відпустки і ${
            remaining - maxNotDivide
          } подільної. Або ${maxDivide - used} днів подільної, і залишиться ${
            remaining - (maxDivide - used)
          } день неподільної, для використання якого потрібно накопичити ${maxNotDivide} днів.`
        );
      }
      if (used === maxDivide) {
        return setResult(
          `Є ${remaining} днів неподільної відпустки, для використання яких потрібно накопичити ${maxNotDivide} днів. Подільну відпустку використано.`
        );
      }
      if (used >= maxNotDivide && used < totalMax) {
        return setResult(
          `Доступно ${remaining} днів подільної відпустки. Неподільну відпустку використано.`
        );
      }
    }

    if (available === totalMax) {
      if (used === 0) {
        return setResult(
          `Доступно ${maxDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
        );
      }
      if (used > 0 && used < maxDivide) {
        return setResult(
          `Доступно ${remaining - maxNotDivide} днів подільної відпустки і ${maxNotDivide} неподільної відпустки.`
        );
      }
      if (used === maxDivide) {
        return setResult(
          `Доступно ${maxNotDivide} неподільної відпустки. Подільна відпустка вичерпана.`
        );
      }
      if (used === maxNotDivide) {
        return setResult(
          `Доступно ${maxDivide} подільної відпустки. Неподільна відпустка вичерпана.`
        );
      }
      if (used > maxNotDivide && used < totalMax) {
        return setResult(
          `Доступно ${remaining} подільної відпустки. Неподільна відпустка вичерпана.`
        );
      }
      if (used === totalMax) {
        return setResult("Вся відпустка використана");
      }
    }

    return setResult("Немає специфічної інформації за такими умовами.");
  };

  return (
    <div className="calculator">
      <h2>Деталізація відпустки</h2>
      <p>{`Всього на рік надається ${totalMax} днів відпустки.  Із них ${maxNotDivide} можна використати тільки неподільно підряд, ${maxDivide} як завгодно.`}</p>
      <h4>Для отримання детальної інформації заповни дані:</h4>
      <div className="inputs">
        <label>
          Доступно:
          <input
            type="number"
            min={0}
            max={totalMax}
            value={available}
            onChange={(e) => {
              let val = Number(e.target.value);
              if (val < 0) val = 0;
              else if (val > totalMax) val = totalMax;
              setAvailable(val);
              // подгоняем used, если он больше доступного
              if (used > val) setUsed(val);
            }}
          />
        </label>
        <label>
          Використано:
          <input
            type="number"
            min={0}
            max={available}
            value={used}
            onChange={(e) => {
              let val = Number(e.target.value);
              if (val < 0) val = 0;
              else if (val > available) val = available;
              setUsed(val);
            }}
          />
        </label>
        <label>
          Залишилось:
          <input
            type="number"
            min={0}
            max={available}
            value={remaining}
            onChange={(e) => {
              let val = Number(e.target.value);
              onRemainingChange(val);
            }}
          />
        </label>
      </div>
      <button onClick={calculate}>Отримати детальнішу інформацію</button>
      {result && <pre className="result">{result}</pre>}
    </div>
  );
}
