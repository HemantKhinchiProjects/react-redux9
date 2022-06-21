import { Add_to_cart } from '../constants';
const addToCart = (data) => {
  return { data: data, type: Add_to_cart };
};
const removeToCart = (data) => {
  return { data: data, type: 'Remove to cart' };
};
export default addToCart;
