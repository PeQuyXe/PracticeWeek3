import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../actions/cartAction";
import StarRating from "./StarRating";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(ADD_TO_CART(product));
    alert(`${product.title} đã được thêm vào giỏ hàng!`);
    navigate("/shopping-cart");
  };

  useEffect(() => {
    const fetchProductById = async (id) => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProductById(productId);
  }, [productId]);

  if (!product) {
    return <div className="text-black-500">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-3">
      <div className="grid grid-rows-3 grid-cols-2 gap-4">
        <div className="row-span-3 col-span-1 mt-auto">
          <img
            src={product.image}
            alt={product.title}
            className="w-60 h-60 object-contain"
          />
        </div>
        <div className="col-span-1 mt-auto flex flex-col justify-between">
          <p className="text-left font-bold">Tên sản phẩm: {product.title}</p>
          <p className="text-left font-bold">Danh Mục: {product.category}</p>
          <div className="flex items-center">
            <StarRating rating={product.rating.rate} />
            <span className="ml-2 text-sm">
              {product.rating.count} đánh giá
            </span>
          </div>
        </div>
        <div className="row-span-2 col-span-1 flex flex-col justify-between">
          <div>
            <p className="text-left font-semibold">
              Giá:{" "}
              {(product.price * 22000).toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </p>
            <div className="mt-2">
              <p className="text-left font-semibold mt-auto">Mô Tả:</p>
              <p className="text-left font-sans mt-auto ">
                {product.description}
              </p>
            </div>
          </div>
          <br />
          <div className="flex justify-between">
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-auto flex items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
            >
              <FaShoppingCart className="mr-2" /> Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
