//Código del CUADRADO ------------------
function perimetroCuadrado(lado) {
  const perimetro = lado * 4;
  return "El perímetro del cuadrado es de: " + perimetro;
}

function areaCuadrado(lado) {
  const area = lado * lado;
  return "el área del cuadrado es de: " + area;
}

// Código del CIRCULO -----------------
//  Perímetro
function calcularCircunferencia(diametro) {
  const PI = Math.PI;
  const circunferencia = diametro * PI;
  return "La circunferencia es de: " + circunferencia;
}

//  área
function AreaCirculo(radio) {
  const PI = Math.PI;
  const area = PI * (radio * radio);
  return "El área del círculo es de: " + area;
}

//Código del TRIANGULO -----------------
//  Perímetro
function perimetroTriangulo(lado, base) {
  const perimetro = lado * 2 + base;
  return "El perímetro del triágulo es de: " + perimetro;
}
//  área
function areaTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return "El área del triángulo es de: " + area;
}

//  altura
function alturaTriangulo(lado, base) {
  const mediaBase = base / 2;
  let altura = Math.sqrt(lado * lado - mediaBase * mediaBase);
  return "La altura del triangulo es de: " + altura;
}

//------------------------------------------------------
//------------------------------------------------------
//-------- Conectando Buttons con functions()  ---------
//------------------------------------------------------
//------------------------------------------------------

console.group("Interactuando con HTML");

//  CUADRADO

console.log("Cuadrado");

function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;
  alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const lado = input.value;
  alert(areaCuadrado(lado));
}

//  CIRCUNFERENCIA

function calcularCircunferenciaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = input.value;
  const diametro = radio * 2;
  alert(calcularCircunferenciaCirculo(diametro));
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const radio = input.value;
  alert(AreaCirculo(radio));
}

//  TRIANGULO
console.log("Triangulo");

function calcularAreaTriangulo() {
  const inputBase = document.getElementById("InputTrianguloBase");
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const base = inputBase.value;
  const altura = inputAltura.value;
  alert(areaTriangulo(base, altura));
}

function calcularPerimetroTriangulo() {
  const inputLado = document.getElementById("InputTrianguloLado");
  const inputBase = document.getElementById("InputTrianguloBase");
  const lado = inputLado.value;
  const base = inputBase.value;
  alert(perimetroTriangulo(lado, base));
}

function calcularAlturaTriangulo() {
  const inputLado = Document.getElementByID("inputLadoTriangulo");
  const inputBase = Document.getElementByID("inputBaseTriangulo");
  const lado = inputLado.Value;
  const base = inputBase.Value;

  alert(alturaTriangulo(lado, base));
}

console.groupEnd();
