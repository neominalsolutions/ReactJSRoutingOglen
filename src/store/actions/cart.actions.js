export const addToCart = (cartItem) => {
	console.log('addToCart', cartItem);

	return { type: 'addToCart', payload: cartItem };
};

export const removeFromCart = (cartItem) => {
	return { type: 'removeFromCart', payload: cartItem };
};

export const increaseQuantity = (productId) => {
	return { type: 'IncreaseQuantity', payload: { productId } };
};

export const decreaseQuantity = (productId) => {
	return { type: 'DecreaseQuantity', payload: { productId } };
};
