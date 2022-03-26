//Código del cuadrado --------------
function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
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

//Código del triángulo -----------------
//Perímetro
function perimetroTriangulo(lado, base) {
  const ladosIrregurale = lado * 2;

  return ladosIrregurale + base;
}
//área
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Calcular altura
function alturaTriangulo(lado, base) {
  const mediaBase = base / 2;
  let altura = Math.sqrt(lado * lado - mediaBase * mediaBase);
  return altura;
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

function calcularAlturaTriangulo() {
  const inputLado = Document.getElementByID("inputLadoTriangulo");
  const inputBase = Document.getElementByID("inputBaseTriangulo");
  const lado = inputLado.Value;
  const base = inputBase.Value;
  const altura = alturaTriangulo(lado, base);

  return (altura = mediaBase);
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
