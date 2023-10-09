import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItems from "./FoodItems";
import { clearcart, removeitem } from '../utils/cartslice';

const CartItem = ({ item,index }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeitem(index)); 
  };

  return (
    <div className="flex items-center">
      <FoodItems {...item} />
      <button className="w-7 bg-orange-400" onClick={handleRemoveItem}>
        -
      </button>
    </div>
  );
};

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleEmptyCart = () => {
    dispatch(clearcart());
  };

  return (
    <>
      <div className="font-semibold text-3xl text-center py-4 text-orange-500">
        Cart
      </div>
      {cartItems.length === 0 ? (
        <h1 className="font-semibold text-lg p-2 text-center text-gray-400">
          Add some items to cart to view them here.
        </h1>
      ) : (
        <>
          <button
            className="bg-orange-300 rounded-md w-14"
            onClick={handleEmptyCart}
          >
            Empty
          </button>
          <div className="flex flex-wrap">
            {cartItems.map((item,index) => (
              <CartItem key={item.id} item={item} index={index} />
            ))}
            {new Promise((resolve, reject) => {
              
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Cart;
