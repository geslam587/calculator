let s = 0;
let c = 0;
let v1 = 0;
let v2 = 0;
let v3 = 0;
let ans1 = document.getElementById("ans1");

function print(n) {
  if (ans1.innerHTML.length<=11) {
      if (c == 1) {
        ans1.innerHTML = n;
        c = 0;
      } else {
        ans1.innerHTML += n;
        if (s == 0) s = 1;
        else if (s >= 2) {
          s = s + 1;
        }
      }
  }
}
function oprator(n) {
  if (s == 1 && ans1.innerHTML != "") {
    ans1.innerHTML += n;
    s = 2;
    c = 0;
  }
}
function anser() {
  if (s >= 3) {
    for (let i = 1; i < ans1.innerHTML.length; i++) {
      if (
        ans1.innerHTML[i] == "+" ||
        ans1.innerHTML[i] == "-" ||
        ans1.innerHTML[i] == "*" ||
        ans1.innerHTML[i] == "/" ||
        ans1.innerHTML[i] == "%"
      ) {
        v2 = ans1.innerHTML[i];
        v3 = Number(ans1.innerHTML.slice(i + 1));
        v1 = Number(ans1.innerHTML.slice(0, i));
        ans1.innerHTML =
          v2 == "+"
            ? v1 + v3
            : v2 == "-"
            ? v1 - v3
            : v2 == "*"
            ? v1 * v3
            : v1 / v3;
      }
    }
    c = 1;
    s = 1;
    v1 = 0;
    v2 = 0;
    v3 = 0;
  }
}
function cler() {
  ans1.innerHTML = "";
  s = 0;
  v1 = 0;
  v2 = 0;
  v3 = 0;
}
function delet() {
  ans1.innerHTML = ans1.innerHTML.slice(0, ans1.innerHTML.length - 1);
  console.log(s);
  if (s >= 2) s = s - 1;
  console.log(s);
}
