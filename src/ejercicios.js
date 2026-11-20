/* const edades = [15, 18, 22, 13, 30];

const mayores = [];

for (const edad of edades) {
  if (edad >= 18) {
    mayores.push(edad);
  }
}

console.log(mayores);
 */

const estudiantes = [
  {
    nombre: "Ana",
    ciudad: "Medellín",
    notas: [4.5, 3.8, 4.0]
  },
  {
    nombre: "Luis",
    ciudad: "Bogotá",
    notas: [2.5, 3.0, 2.8]
  },
  {
    nombre: "Sara",
    ciudad: "Medellín",
    notas: [3.2, 3.6, 3.1]
  },
  {
    nombre: "Tomás",
    ciudad: "Cali",
    notas: []
  }
];


/* promedio notas*/

/* function calcularPromedio(numeros) {
  if (numeros.length === 0) {
    return 0;
  }

  const suma = numeros.reduce((a, n) => a + n, 0);

  return suma / numeros.length;
} */

function promedio (notas) {
  if (notas.length === 0) {
    return 0;
  }
  return notas.reduce((acum, v)=> acum + v, 0)/notas.length;
}

const conPromedio = estudiantes.map(e => ({
  ...e,
  prom: promedio(e.notas)
}));

/*estudiantes reprobados*/

const reprobados = conPromedio
.filter(e => e.prom < 3.0)
.map(e => e.nombre);

/* mejor estudiante */

/* 
const mejor = conPromedio.reduce((m, e) =>{
  return e.prom > m.prom ? e : m;
}); */

const mejor = conPromedio.length === 0 
? null
:conPromedio.reduce((m, e) => e.prom > m.prom ? e : m);


/* mejor por ciudad */

const porCiudad = {};

for (const e of conPromedio) {
  if (e.prom >= 3.0){
    porCiudad[e.ciudad] =
    (porCiudad[e.ciudad] || 0 ) + 1;
  }
  
}

/* const reprobados = conPromedio.filter(e => e.prom < 3.0 );
const Nreprobados = reprobados.map(e => e.nombre); */

console.log(conPromedio);
console.log(reprobados);
console.log(mejor);
console.log(porCiudad);



/* console.log(estudiantes);  */
