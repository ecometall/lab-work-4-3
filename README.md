## Lab Work 4-3

A simple Java Script project.
Here is its script:

```javascript
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2, бо префіксна форма спочатку збільшує а на 1 до 2, а потім повертає с
d = b++; alert(d); // 1, бо постфіксна форма збільшує, але повертає старе значення
c = (2+ ++); alert(c); // 5, бо спочатку збільшує а до 3, потім використовується в арифмтиці
d = (2+ b++); alert(d); // 4, бо спочатку збільшує b до 3, але у цьому вираженны залишили старе значення
alert(a); // 3, бо кожну змінну було збільшено по 2 рази
alert(b); // 3, бо кожну змінну було збільшено по 2 рази

var a = 2;
var n = 1 + (a *= 2);
alert (a); // 2
alert(n); // 5

var a="Мама ", b="ми", c="ла", d=" ра"; e ="му";
alert(a+b+c+d+e);

```
Project is published at:
https://ecometall.github.io/lab-work-4-3/
