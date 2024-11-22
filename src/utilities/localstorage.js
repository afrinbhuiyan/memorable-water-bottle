const getStoredCart = () =>{
    const storedCartString = localStorage.getItem("cart")
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveCartToLS = cart => {
    const CartStringified = JSON.stringify(cart);
    localStorage.setItem("cart", CartStringified);
} 

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

const removeFromLS = id => {
    const cart = getStoredCart();
    // removeing every id
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLS(remaining);
}

export { addToLS, getStoredCart, removeFromLS }