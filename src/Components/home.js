import React from 'react';
const Home = () => {
  return (
    <div>
      <div>Add to cart</div>
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
