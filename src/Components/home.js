import React from 'react';
import { mdiCartPlus } from '@mdi/js';
import Icon from '@mdi/react';
const Home = () => {
  return (
    <div>
      <div className="cart">
        <Icon path={mdiCartPlus} title="User Profile" size={1} color="red" />{' '}
        Add to cart
      </div>
      <div className="cart-wraper">
        <div className="img-wrapper item">
          <img
            src="https://www.pngfind.com/pngs/m/103-1038702_png-iphone-white-iphone-5-transparent-png.png"
            alt="phone"
          />
        </div>
        <div className="text-wrapper">
          <span>I-Phone</span>
          <span>Price: $ 1000</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
