import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import './Bottles.css'
import { additemtoCardLocalsotrage, getCardformloclstorage } from '../localstorage';


const Botttols = ({bottlesPromise}) => {
 const bottles = use(bottlesPromise)


 const [cart, setCart]= useState([])
const handleAddcart =(bottle)=>{
      const  newCart = [...cart, bottle]
      setCart(newCart)

      additemtoCardLocalsotrage(bottle.id)
      

}
const storedcard =[]
useEffect(()=>{
    const storedcarids = getCardformloclstorage()
    
    for(const id of storedcarids){
      
        const cartbottle = bottles.find(bottle=> bottle.id === id)
        storedcard.push(cartbottle)
        
    }
    setCart(storedcard)
     
}, [bottles])






    return (
        <div >
            <h3>data amount : {bottles.length}</h3>
            <h4>cart added: {cart.length} </h4>
            <div className='perent-div' >
            {
                bottles.map(bottle=> <Bottle key={bottle.id} bottle={bottle} handleAddcart={handleAddcart}></Bottle> )
            }
        </div>
            </div>
    );
};

export default Botttols;