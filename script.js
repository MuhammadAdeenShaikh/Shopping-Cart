let totalAmount = 0;

function AddtoCart(event){
    const product = event.target.parentElement;
    const productName = product.querySelector('h5').innerText; //Product name
    const productPrice = product.querySelector('p').innerText; //Product price

    const cartitems = document.getElementById('cart-items');
    const li = document.createElement("li");
    li.textContent = `${productName} - ${productPrice}`;
    cartitems.appendChild(li);

    // Price ko number me convert karo (remove $ sign)
    const priceValue = parseFloat(productPrice.replace('$', ''));

    // totalAmount update karo
    totalAmount += priceValue;

    // Total show karo
    const totalElement = document.querySelector('.total');
    totalElement.textContent = `Total: $${totalAmount.toFixed(2)}`;

}