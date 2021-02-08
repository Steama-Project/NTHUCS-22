import {createSelector} from 'reselect'

//select the whole state of the cart
const selectCart = state => state.cart;

//select the cartItem state of the cart state
export const selectCartItems = createSelector(
    [selectCart], (cart) => cart.cartItems
);


//select the hidden state form cart state
export const selectHidden = createSelector(
    [selectCart], (cart) => cart.hidden
);

//select the item quantity count from the cartItem state of the cart state
export const selectCartItemCount = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity , 0)
)


export const selectTotalCheckout = createSelector(
    [selectCartItems], cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.price * cartItem.quantity , 0)
)