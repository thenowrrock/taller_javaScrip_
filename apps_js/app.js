/*Taller Java Script 
Autor : Juan David Jimenez Atehortua 
Codigo: 71101
Fecha de creacion : 12/10/2021 , culmino su realizacion :V
 
Crear variable película y asignarle el valor “The avengers – Age of Ultron”
 
1.     Imprimir en consola la cantidad de caracteres que contiene el titulo.
2.     Buscar en la variable película la palabra “Ultron” y mostrar si el texto existe.
3.     Buscar en la variable película la palabra “Hulk” y mostrar si el texto existe.
4.     Buscar en la variable película la palabra avengers y mostrar en que posición del texto se encuentra.
5.     Reemplazar la frase Age of Ultron” por “End Game” usando método para reemplazar texto
6.     Cortar la frase a “avengers – Age”
 
Crear objeto JSON Película
a.     nombre = Iron man
b.     Precio = 25000
c.     Sala = 1
d.     Asiento = j11
e.     Descuento = true
f.      Cantidad de personas = 5
g.     Porcentaje de descuento = 10%
h.     Fecha de estreno
 
7.     Concatenar las variables nombre, precio, sala, asiento usando usando Template String (Ejemplo: `Se reservo ${pelicula} en la sala ${sala}`
 que diga: Se reservó la película Iron man en la sala 1 en el asiento j11 por un precio de $25.000
8.     Adicionar espacios a la variable película al inicio y final de la palabra, por ejemplo: “Iron man.”  usando reasignación de variables.
9.     Eliminar todos los espacios en blanco del anterior titulo.
10.  Eliminar solo los espacios del final del anterior titulo.
11.  Imprimir en consola la letra del asiento correspondiente en mayúscula
12.  Imprimir el total de la venta con descuento incluido
13.  Imprimir en consola si la venta  tuvo descuento, teniendo en cuenta la variable descuento y si tuvo descuento imprimir también el valor.
14.  Crear un arreglo con al menos 5 películas y mostrar la información de cada uno recorriendo el arreglo.
15.  Ordenar el arreglo de las películas alfabéticamente en orden ascendente por nombre.
 */

/*1 Imprimir en consola la cantidad de caracteres que contiene el titulo.*/
let pelicula = " The avengers – Age of Ultron ";
console.log(pelicula);
let conteo = pelicula.length;
console.log("Conteo de la string pelicula:",conteo);

/*2 Buscar en la variable película la palabra “Ultron” y mostrar si el texto existe.*/
let pal_bus1 = pelicula.includes("Ultron");
console.log("Existe el texto Ultron:",pal_bus1);

/*3 Buscar en la variable película la palabra “Hulk” y mostrar si el texto existe.*/
let pal_bus2 = pelicula.includes("Hulk");
console.log("Existe el texto Hulk:",pal_bus2);

/*4 Buscar en la variable película la palabra avengers y mostrar en que posición del texto se encuentra.*/
 let pal_bus3 =  pelicula.search("avengers");
 console.log("Posicion de la palabra Avengers :",pal_bus3);

 /*5  Reemplazar la frase Age of Ultron” por “End Game” usando método para reemplazar texto*/
 console.log("La remplazaremos:",pelicula);
 let newPelicula = pelicula.replace(/Age of Ultron/i , "End Game"); // / /i para remplazr minusculas y mayusculas
 console.log(newPelicula);

/*6 Cortar la frase a “avengers – Age”*/
console.log(" Cortar la frase :",pelicula);
let pal_eliminar = pelicula.slice(4,18);
console.log("Cortada la frase a :" , pal_eliminar);

/* Crear objeto JSON Película
a.     nombre = Iron man
b.     Precio = 25000
c.     Sala = 1
d.     Asiento = j11
e.     Descuento = true
f.      Cantidad de personas = 5
g.     Porcentaje de descuento = 10%
h.     Fecha de estreno*/

const peliculas = 
    {
        nombre: 'Iron man',
        precio: '25000',
        sala: 1,
        asiento: 'j11',
        descuento: true,
        cantidad_personas: 5,
        porcentaje_descuento: 10,
        fecha_estreno: 'fecha_estreno',
        duracion: 'duracion',
        genero: 'genero'
    }

console.log(peliculas);

/*7  Concatenar las variables nombre, precio, sala, asiento usando usando Template String (Ejemplo: `Se reservo ${pelicula} en la sala ${sala}`
 que diga: Se reservó la película Iron man en la sala 1 en el asiento j11 por un precio de $25.000 */
const pelis = [`Se reservo  ${peliculas.nombre}  en la sala  ${peliculas.sala} con el asiento ${peliculas.asiento} por un precio de ${peliculas.precio}`];
console.log(pelis);

/*8 Adicionar espacios a la variable película al inicio y final de la palabra, por ejemplo: “Iron man.”  usando reasignación de variables. */
var adicion_espaces_ = pelicula.padStart(0,1);
adicion_espaces_ = pelicula.padEnd(28);
console.log("Adicion espacios de agreagcion a la variable pelicula:",adicion_espaces_);

/*9  Eliminar todos los espacios en blanco del anterior titulo.*/
let elimite_espaces_blanco = pelicula.trim();
console.log("Elimite espacios en blanco:",elimite_espaces_blanco);

/*10 Eliminar solo los espacios del final del anterior titulo. */
let elimite_espaces_blanco_final = pelicula.trimEnd();
console.log("Elimite espacios final", elimite_espaces_blanco_final);

/*11 Imprimir en consola la letra del asiento correspondiente en mayúscula */
let change_mayus = peliculas.asiento.toLocaleUpperCase();
console.log("Change letra asiento a mayuscula:", change_mayus);

/*12 Imprimir el total de la venta con descuento incluido */
function calcular_descuento(a,b) {
    let descuento = 0;
    descuento =  a * b  / 100;
    let total =  a - descuento;
    return total;
    
}
console.log("Descuento aplicado:", calcular_descuento(peliculas.precio , peliculas.porcentaje_descuento));

/*13 Imprimir en consola si la venta  tuvo descuento, teniendo en cuenta la variable descuento y si tuvo descuento imprimir también el valor.*/
function verificar_descuento(a){
   if(a === true){return console.log("La venta Obtuvo su descuento", a);
}else{return console.log("La venta No obtuvo descuento",a);}   
}
verificar_descuento(peliculas.descuento);
/*14  Crear un arreglo con al menos 5 películas y mostrar la información de cada uno recorriendo el arreglo.*/
const array_peliculas = [
            { 
                nombre: 'FALL OUT NOW',
                duracion: 'Duracion',
                genero: 'Genero'
            },
            {
                nombre: 'ARMAGEDON',
                duracion: 'Duracion',
                genero: 'Genero'
            },
            {
                nombre: 'PILOTS',
                duracion: 'Duracion',
                genero: 'Genero'  
            },
            {
                nombre: 'DEAD RUN',
                duracion: 'Duracion',
                genero: 'Genero'
            },
            {
                nombre: 'GRECIA',
                duracion: 'Duracion',
                genero: 'Genero'
            },];

array_peliculas.forEach(array_peliculas =>{ console.log("Array JSON desordenado:",array_peliculas);})
//array_peliculas.sort().forEach(array_peliculas =>{console.log(array_peliculas);})

/*15 Ordenar el arreglo de las películas alfabéticamente en orden ascendente por nombre.*/
let array_ordenado = array_peliculas.sort(function(a,b){
    let text_a = a.nombre;
    let text_b = b.nombre;
    return(text_a < text_b) ? -1 :(text_a > text_b) ? 1 : 0;
});
console.log("Array JSON ordenado: ",array_ordenado);