export const addToCart = (id) => {
  console.log("ADD_TO_CART" + id);
  return {
    type: "ADD_TO_CART",
    id
  };
};
