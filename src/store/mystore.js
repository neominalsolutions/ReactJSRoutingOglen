import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/product.reducer';
import { cartReducer } from './reducers/cart.reducer';
import { sideMenuReducer } from './reducers/side.menu.reducer';

// asenkron bir yapıdan çekilen verinin araya girilip senkronlaştırılması için araya bir middleware ile gireririz. Burada bu işlemden sorumlu arkadaş thunk middleware
// combineReducers ile sistemde ne kadar farklı state mekanizması takip edilecekse hepsini tanımlarız.
export const mystore = createStore(
	combineReducers({
		productState: productReducer,
		cartState: cartReducer,
		sideMenuState: sideMenuReducer,
	}),
	applyMiddleware(thunk)
);
