var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2, бо префіксна форма спочатку збільшує а на 1 до 2, а потім повертає с
d = b++; alert(d); // 1, бо постфіксна форма збільшує, але повертає старе значення
c = (2+ ++); alert(c); // 5, бо спочатку збільшує а до 3, потім використовується в арифмтиці
d = (2+ b++); alert(d); // 4, бо спочатку збільшує b до 3, але у цьому вираженны залишили старе значення
alert(a); // 3, бо кожну змынну було збільшено по 2 рази
alert(b); // 3, бо кожну змынну було збільшено по 2 рази