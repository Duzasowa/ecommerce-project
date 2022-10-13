import axios from "axios";

export const addToCart = (id, qty) => async(display, getState) => {
  const {data} = await axios.get(`/api/products/${id}`);

  dispatchEvent({
    type: CART_REMOVE_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};