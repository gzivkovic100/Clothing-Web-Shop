import { useContext } from 'react';

import './cart-icon.styles.scss';

import { CartContext } from '../../contexts/cart-context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';


const CartIcon = () => {

    const {  isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

    const toogleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toogleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" ></ShoppingIcon>
            <span className="item-count" >{cartCount}</span>
        </div>
    )
}

export default CartIcon;
