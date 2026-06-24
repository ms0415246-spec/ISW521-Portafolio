let notas = [95, 82, 76, 68, 50];

let suma = 0;

for (let nota of notas) {
    if (nota >= 90) {
        console.log(nota + " = A");
    } else if (nota >= 80) {
        console.log(nota + " = B");
    } else if (nota >= 70) {
        console.log(nota + " = C");
    } else if (nota >= 60) {
        console.log(nota + " = D");
    } else {
        console.log(nota + " = F");
    }

    suma += nota;
}

let promedio = suma / notas.length;
console.log("Promedio: " + promedio);
