import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import Item from './itemDetail';
import Photo from './img/photo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const Home = () => {
  return(<div className='home'>
           <div className='container'>
              <div className='contain'>
                    <h1 className='header'>TheThrift <i class="fa fa-paper-plane-o" aria-hidden="true"/></h1>
                    <p className='para'>Marshmello bundle, including Marshmello outfit, Mello Mallets pickaxe, Mello Rider glider and Marsh Walk emote....</p>
                    <span class="line-1"></span><br/>
                    <span class="line-2"></span><br/> 
                    <span class="line-3"></span><br/>
                    <button className=''>Get Started &#x2605;</button>
                </div>
                <div className="img">
                    <img src={Photo} alt=""/>
                </div>
           </div>
           <hr/>
          <div className="footer">
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
        )
}

function App() {
  return (
    <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/The-Thrift' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/shop' exact component={Shop} />
            <Route path='/shop/:id' component={Item} />
          </Switch>
        </div>
    </Router>
    
  );
}

export default App;
