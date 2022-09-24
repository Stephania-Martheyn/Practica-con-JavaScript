/*const precioOriginal =120;
const descuento =18;

const porcentajePrecioConDescuento =100 - descuento;
const precioConDesuento = (precioOriginal*porcentajePrecioConDescuento)/100;

console.log({
    precioOriginal, 
    descuento,
    porcentajePrecioConDescuento,
    precioConDesuento
});
*/
//Haremos ahora la funcion
function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento =100 - descuento;
const precioConDesuento = (precio*porcentajePrecioConDescuento)/100;
return precioConDesuento;
}

function onClickButtonPriceDiscount (precio,descuento){
    const inputPrice= document.getElementById("InputPrice");
    const priceValue= inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const discountValue = InputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento (priceValue, discountValue);

    const resulP = document.getElementById("ResultP");
    resulP.innerText = `El precio con un descuento de ${InputDiscount.value}% es de $${precioConDescuento}`;
}