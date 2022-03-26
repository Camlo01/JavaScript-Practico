//Código del cuadrado --------------
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

//Código del triángulo -----------------

function perimetroTriangulo(lado, base) {
  const ladosIrregurale = lado * 2;

  return ladosIrregurale + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// //Código del círculo ------------
//Circunferencia
function calcularCircunferencia(diametro) {
  const PI = Math.PI;
  return diametro * PI;
}

// Área
function AreaCirculo(radio) {
  const PI = Math.PI;
  return PI * (radio * radio);
}

//------------------------------------------------------
//--------------Interactuar con HTML -------------------
//------------------------------------------------------
console.group("Interactuando con HTML");
//CUADRADO

console.log("Cuadrado");
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert("El perímetro de tu cuadrado vale " + perimetro + " cm");
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  const area = areaCuadrado(value);
  alert("El área del cuadrado es: " + area + " cm");
}

//TRIÁNGULO
console.log("Triangulo");

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const base = inputBase.value;
  const altura = inputAltura.value;
  const area = areaTriangulo(base, altura);
  alert("El área del triángulo es de: " + area + " cm cuadrados");
}

function calcularPerimetroTriangulo() {
  const inputLado = document.getElementById("InputTrianguloLado");
  const inputBase = document.getElementById("InputTrianguloBase");
  const lado = inputLado.value;
  const base = inputBase.value;
  const perimetro = perimetroTriangulo(lado, base);
  alert("El perímetro del triángulo es: " + perimetro + " cm");
}

//CIRCUNFERENCIA

function calcularCircunferenciaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = input.value;
  const diametro = radio * 2;
  const circunferencia = calcularCircunferencia(diametro);
  alert("La circunferencia es de: " + circunferencia + " cm");
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = input.value;
  const area = AreaCirculo(radio);
  alert("El área del circulo es de: " + area + " cm");
}

console.groupEnd();
