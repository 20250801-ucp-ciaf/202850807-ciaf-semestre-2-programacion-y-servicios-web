// ========================================
// TIPOS DE FUNCIONES EN JAVASCRIPT
// ========================================

/*
console.log("=== EJEMPLOS DE FUNCIONES EN JAVASCRIPT ===\n");

// ========================================
// 1. FUNCIÓN DECLARADA (Function Declaration)
// ========================================
// - Se puede llamar antes de declararla (hoisting)
// - Sintaxis más tradicional y clara

function saludar(nombre) {
  return `¡Hola ${nombre}!`;
}

console.log("1. Función Declarada:");
console.log(saludar("María")); // ¡Hola María!
console.log("");

// ========================================
// 2. FUNCIÓN EXPRESADA (Function Expression)
// ========================================
// - Se asigna a una variable
// - Más flexible para pasar como parámetro

const multiplicar = function (a, b) {
  return a * b;
};

console.log("2. Función Expresada:");
console.log("5 * 3 =", multiplicar(5, 3)); // 15
console.log("");

// ========================================
// 3. FUNCIÓN FLECHA (Arrow Function)
// ========================================
// - Sintaxis más corta y moderna
// - Ideal para funciones simples

const sumar = (a, b) => a + b;
const cuadrado = (x) => x * x;
const saludarFlecha = (nombre) => `¡Hola ${nombre}!`;

console.log("3. Función Flecha:");
console.log("2 + 3 =", sumar(2, 3)); // 5
console.log("4² =", cuadrado(4)); // 16
console.log(saludarFlecha("Carlos")); // ¡Hola Carlos!
console.log("");

// ========================================
// 4. FUNCIÓN CON VALORES POR DEFECTO
// ========================================
// - Parámetros opcionales con valores predefinidos

function crearUsuario(nombre, edad = 18, ciudad = "Desconocida") {
  return {
    nombre: nombre,
    edad: edad,
    ciudad: ciudad,
  };
}

console.log("4. Función con Valores por Defecto:");
console.log(crearUsuario("Ana")); // {nombre: "Ana", edad: 18, ciudad: "Desconocida"}
console.log(crearUsuario("Pedro", 25)); // {nombre: "Pedro", edad: 25, ciudad: "Desconocida"}
console.log(crearUsuario("Luis", 30, "Madrid")); // {nombre: "Luis", edad: 30, ciudad: "Madrid"}
console.log("");

// ========================================
// 5. FUNCIÓN QUE RETORNA OBJETO
// ========================================
// - Retorna múltiples valores en un objeto
// - Útil para funciones complejas

function calcularEstadisticas(numeros) {
  const suma = numeros.reduce((total, num) => total + num, 0);
  const promedio = suma / numeros.length;
  const maximo = Math.max(...numeros);
  const minimo = Math.min(...numeros);

  return {
    suma: suma,
    promedio: promedio,
    maximo: maximo,
    minimo: minimo,
    cantidad: numeros.length,
  };
}

console.log("5. Función que Retorna Objeto:");
const numeros = [10, 20, 30, 40, 50];
const stats = calcularEstadisticas(numeros);
console.log("Estadísticas:", stats);
console.log("");

// ========================================
// 6. FUNCIÓN COMO PARÁMETRO (Callback)
// ========================================
// - Pasa una función como argumento
// - Muy común en JavaScript moderno

function procesarArray(array, funcion) {
  const resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(funcion(array[i]));
  }
  return resultado;
}

const duplicar = (x) => x * 2;
const convertirTexto = (x) => x.toString();

console.log("6. Función como Parámetro (Callback):");
const numeros2 = [1, 2, 3, 4, 5];
console.log("Duplicar:", procesarArray(numeros2, duplicar)); // [2, 4, 6, 8, 10]
console.log("A texto:", procesarArray(numeros2, convertirTexto)); // ["1", "2", "3", "4", "5"]
console.log("");

// ========================================
// 7. FUNCIÓN INMEDIATAMENTE INVOCADA (IIFE)
// ========================================
// - Se ejecuta inmediatamente al declararla
// - Útil para crear scope privado

const resultado = (function () {
  const numeroSecreto = 42;
  return numeroSecreto * 2;
})();

console.log("7. Función Inmediatamente Invocada (IIFE):");
console.log("Resultado:", resultado); // 84
console.log("");

// ========================================
// 8. FUNCIÓN DENTRO DE OBJETO (Método)
// ========================================
// - Función que pertenece a un objeto
// - Accede a las propiedades del objeto con 'this'

const calculadora = {
  valor: 0,

  sumar: function (numero) {
    this.valor += numero;
    return this.valor;
  },

  restar: function (numero) {
    this.valor -= numero;
    return this.valor;
  },

  obtenerValor: function () {
    return this.valor;
  },

  // También se puede usar sintaxis corta
  reset() {
    this.valor = 0;
    return this.valor;
  },
};

console.log("8. Función dentro de Objeto (Método):");
console.log("Valor inicial:", calculadora.obtenerValor()); // 0
calculadora.sumar(10);
console.log("Después de sumar 10:", calculadora.obtenerValor()); // 10
calculadora.restar(3);
console.log("Después de restar 3:", calculadora.obtenerValor()); // 7
calculadora.reset();
console.log("Después de reset:", calculadora.obtenerValor()); // 0
console.log("");


// ========================================
// 9. FUNCIÓN RECURSIVA
// ========================================
// - Función que se llama a sí misma
// - Útil para algoritmos como factorial, fibonacci

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("9. Función Recursiva:");
console.log("Factorial de 5:", factorial(5)); // 120
console.log("Fibonacci posición 7:", fibonacci(7)); // 13
console.log("");

// ========================================
// 10. FUNCIÓN GENERADORA (Generator Function)
// ========================================
// - Función que puede pausarse y reanudarse
// - Útil para iteraciones complejas

function* generarNumeros() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

console.log("10. Función Generadora:");
const generador = generarNumeros();
console.log("Primer valor:", generador.next().value); // 1
console.log("Segundo valor:", generador.next().value); // 2
console.log("Tercer valor:", generador.next().value); // 3
console.log("");

// ========================================
// RESUMEN Y COMPARACIÓN
// ========================================

console.log("=== RESUMEN DE TIPOS DE FUNCIONES ===");
console.log("1. Declarada: function nombre() {}");
console.log("2. Expresada: const nombre = function() {}");
console.log("3. Flecha: const nombre = () => {}");
console.log("4. Con valores por defecto: function(a, b = 0) {}");
console.log("5. Que retorna objeto: return {prop: valor}");
console.log("6. Como parámetro: funcion(callback)");
console.log("7. IIFE: (function() {})()");
console.log("8. Método: objeto.metodo()");
console.log("9. Recursiva: se llama a sí misma");
console.log("10. Generadora: function* nombre() {}");

console.log("\n=== CONSEJOS DE USO ===");
console.log("- Usa función declarada para funciones principales");
console.log("- Usa función flecha para funciones simples y callbacks");
console.log("- Usa función expresada cuando necesites flexibilidad");
console.log("- Usa métodos para funciones relacionadas con objetos");
console.log("- Usa recursión con cuidado (puede causar stack overflow)");
*/
