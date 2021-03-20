import React, {useState, useEffect} from 'react'
import './App.css';
import {Link} from 'react-router-dom';


function Shop() {

    useEffect(() =>{
       fetchItems();
    }, []);

    const [items , setItems] = useState([]);

const fetchItems = async () => {
    const data = await fetch ('https://fortnite-api.theapinetwork.com/upcoming/get');
    const items = await data.json();

    console.log(items.data)
    setItems(items.data);
}


  return (
    <div className='shops'>
      <h1>Featured Products....</h1>
       {items.map(item => (
         <div className='items'>
            <h2 className='item' key={item.itemId}>
                <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
            </h2>
            <img src={item.item.images.icon} alt=""/>
            <p>{item.item.description}</p>
         </div>
          
       ))}
    </div>
  );
}

export default Shop;