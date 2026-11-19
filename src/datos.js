const ventas = [
  {
    id: 1,
    producto: "Teclado",
    categoria: "Periféricos",
    ciudad: "Medellín",
    valor: 120000
  },
  {
    id: 2,
    producto: "Mouse",
    categoria: "Periféricos",
    ciudad: "Bogotá",
    valor: 45000
  },
  {
    id: 3,
    producto: "Monitor",
    categoria: "Pantallas",
    ciudad: "Medellín",
    valor: 780000
  }
];

const valores = ventas.filter(v => v.valor >= 50000);
console.log(valores);

const bogota = ventas.filter(v => v.ciudad === "Bogotá");
console.log(bogota);

/* const valores = [];

for (const v of ventas) {
    if (v.valor >= 50000) {
        valores.push(v);
    }
}
console.log(valores); */



/* for (let i = 0; i < ventas.length; i++) {
    console.log(ventas[i]);
}

for (const v of ventas) {
    console.log(v.categoria)
} */
/* 
console.log(ventas);
console.log(ventas[ventas.length - 1]);
console.log(ventas.length - 1)
console.log(ventas[1].categoria); */