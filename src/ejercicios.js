const edades = [15, 18, 22, 13, 30];

const mayores = [];

for (const edad of edades) {
  if (edad >= 18) {
    mayores.push(edad);
  }
}

console.log(mayores);