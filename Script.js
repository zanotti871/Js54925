let productos = {
  "leche": 2.5,
  "pan": 1.0,
  "arroz": 1.5,
  "fideos": 1.8,
};

let costoTotal = 0;

alert("Bienvenido al simulador interactivo de compras en el supermercado!");

do {
  let productoElegido = prompt("Seleccione un producto de la lista:\n- leche\n- pan\n- arroz\n- fideos\n (Presione Cancelar para terminar la selección)").toLowerCase();
  if (productoElegido === null) {
    break;
  }
  
  let cantidad = parseInt(prompt("Ingrese la cantidad que desea comprar:"));
  switch(productoElegido) {
    case "leche":
      costoTotal += productos.leche * cantidad;
      break;
    case "pan":
      costoTotal += productos.pan * cantidad;
      break;
    case "arroz":
      costoTotal += productos.arroz * cantidad;
      break;
    case "fideos":
      costoTotal += productos.fideos * cantidad;
      break;
    default:
      alert("Producto no encontrado en la lista");
  }
  
  alert(`El precio total de su ${productoElegido} es: $${(cantidad * productos[productoElegido]).toFixed(2)}`);

  let seguirComprando = confirm("¿Desea seguir comprando?");
  if (!seguirComprando) {
    break;
  }
  
} while (true);

alert(`El costo total de su compra es: $${costoTotal.toFixed(2)}`);
alert("¡Gracias por utilizar nuestro simulador interactivo de compras en el supermercado! ¡Hasta la próxima!");
