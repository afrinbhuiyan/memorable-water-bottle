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

export { addToLS, getStoredCart }