import React from 'react'
import './App.css';

function About() {
  return (
    <div className='about'>
        <h1>The Thrift...</h1>
        <p>
        The exclusive collection is available for one week only. You can bid on your favourite pieces over 
        on our eBay store with everything starting at just 99p. Yes, that’s right, 99p!
        The collection features items that have been handpicked from Barnardo’s stores by Little Big Bell. 
        Geraldine has also kindly donated a number of her own beautiful pieces. You can quite literally shop 
        Little Big Bell’s home.
        The collection also features a number of items which have been kindly donated which includes
         @Doodle_Moo , Eleanor Bowmer, Gayle Mansfield Designs, Nanas of Anarchy, Particular People , The Native 
         State, Sugar Snap Studio, Bombay Duck London, Catherine Rowe Designs, W.A Green, Hannah Carvell, 
         Kitty McCall and Moi Mili.
        </p>
        <div className="footer">
        <hr/>
            <div className="footer-item">
                <a href=""><i class="fa fa-instagram  foter-url fa-3x"  aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-facebook  foter-url fa-3x" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-linkedin  foter-url fa-3x" aria-hidden="true"></i></a>
            </div>
            <div className="production">
                <p><i class="fa fa-product-hunt" aria-hidden="true fa-2x"></i>  2021 production Blaze</p>
            </div>
          </div>  
    </div>
  );
}

export default About;