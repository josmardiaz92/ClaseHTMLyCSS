let cedula;
let nombre;
let cantidadProducto=0;
let precio=0;
let totalPagar=0;


do
{
    cedula=Number(prompt("Ingrese su cédula: "));
}while(isNaN(cedula));

do
{
    nombre=prompt("Ingrese su nombre: ","Nombre y Apellido");
}while(nombre === "Nombre y Apellido");

do
{
    cantidadProducto=parseInt(prompt("Ingrese la cantidad de producto que desea llevar: "));
}while(cantidadProducto <=0);

do
{
    precio=parseInt(prompt("Ingrese el precio del producto que desea llevar: "));
}while(precio <= 0);

totalPagar = cantidadProducto*precio;

alert(nombre + " C.I.: " + cedula + " Su total a pagar es: " + totalPagar + " bs");