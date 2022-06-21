import { Add_to_cart } from '../constants';
const addToCart = (data) => {
  return { dayta: data, type: Add_to_cart };
};
const removeToCart = (data) => {
  return { dayta: data, type: 'Remove to cart' };
};
export default addToCart;
