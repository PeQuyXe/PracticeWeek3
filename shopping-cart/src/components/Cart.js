import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
} from "../actions/cartAction";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(REMOVE_FROM_CART(productId));
  };

  const handleQuantityChange = (productId, quantity) => {
    if (quantity > 0) {
      dispatch(UPDATE_CART_ITEM_QUANTITY(productId, quantity));
    }
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 22000,
    0
  );

  return (
    <div className="container mx-auto p-4 mt-4 mb-4">
      {cartItems.length === 0 ? (
        <p>Không có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li
              key={item.id}
              className="mb-4 flex justify-between items-center bg-white shadow-md rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="font-semibold mt-1">
                  Giá:{" "}
                  {(item.price * 22000).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </p>
                <div className="flex items-center mr-3 mt-auto">
                  <span className="mr-2 ml-20 text-center">Số lượng: </span>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                    className="w-12 border border-gray-300 rounded text-center"
                  />
                </div>
              </div>
              <button
                onClick={() => handleRemoveFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div className="mt-4 text-right">
          <h3 className="text-xl font-semibold">
            Tổng số tiền:{" "}
            {totalAmount.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
