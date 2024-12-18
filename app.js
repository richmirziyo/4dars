// Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.

let a = Number(
  prompt("To'g'ri to'rtburchakning birinchi tomonini kiriting (a):")
);
let b = Number(
  prompt("To'g'ri to'rtburchakning ikkinchi tomonini kiriting (b):")
);

if (a > 0 && b > 0) {
  let S = a * b;
  let P = 2 * (a + b);

  alert(`To'g'ri to'rtburchakning yuzasi (S): ${S}`);
  alert(`To'g'ri to'rtburchakning perimetri (P): ${P}`);
} else {
  alert("Iltimos, tomonlarning qiymatini musbat son sifatida kiriting!");
}

// Integer2. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.

let M = Number(prompt("Ikki xonali sonni kiriting:"));

if (M >= 10 && M <= 99) {
  let onliklar = Math.floor(M / 10);
  let birliklar = M % 10;

  let swappedNumber = birliklar * 10 + onliklar;

  alert(
    `Raqamlar o'rnini almashtirgandan keyin hosil bo'lgan son: ${swappedNumber}`
  );
} else {
  alert("Iltimos, ikki xonali son kiriting!");
}

// Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.

let number = Number(prompt("Uch xonali sonni kiriting..."));

if (number >= 100 && number <= 999) {
  let yuzlar = Math.floor(number / 100);

  alert(`Uch xonali sonning yuzlar xonasidagi raqam: ${yuzlar}`);
} else {
  alert("Uchhonali son krting.");
}

//2-misol
const n = +prompt("A sonini kiriting");
const m = +prompt("B sonini kiriting ");
if (n && m % 2 == 0) {
  console.log(`${n} va ${m} sonlari juft sonlar`);
} else {
  console.log(`
    ${n} va ${m} sonlari toq sonlar faqat bittasi toq bolishi mumkin tekshirib koring
  `);
}




