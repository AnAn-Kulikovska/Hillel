val = +prompt("Введите число", 0);
res = 1;

for (i = 1; i <= val; ++i) {
    res *= i;
}

console.log(res);