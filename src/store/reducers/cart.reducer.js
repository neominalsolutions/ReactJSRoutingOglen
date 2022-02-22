const cartInitialState = {
	// todo ile etkileşime geçmeden önceki state ne.
	total: 0,
	cartItems: [],
};

export const cartReducer = (state = cartInitialState, action) => {
	console.log('cartReducerPayload', action.payload);
	console.log('cartReducerState', state);

	// delete işleminde action payload id geliyor
	// add işleminde ise action payload object geliyor.
	// select işleminde de action payload üzerinden yine id göndereceğiz.

	switch (action.type) {
		case 'addToCart':
			const existingCartItem = state.cartItems.find(
				(x) => x.productId == action.payload.productId
			);

			console.log('existingCartItem', existingCartItem);

			if (existingCartItem != undefined) {
				existingCartItem.quantity += 1;

				let _total = 0;

				for (const item of state.cartItems) {
					_total += Number(item.price) * Number(item.quantity);
				}

				return {
					...state, // state üzerindeki sadece products propertysini güncelliyoruz.
					cartItems: [...state.cartItems],
					total: _total,
				};
			} else {
				let cartItems = [action.payload, ...state.cartItems];

				let _total = 0;

				for (const item of cartItems) {
					_total += Number(item.price) * Number(item.quantity);
				}

				return {
					...state, // state üzerindeki sadece products propertysini güncelliyoruz.
					cartItems: [...cartItems],
					total: _total,
				};
			}

		default:
			break;
	}

	return state;
};
