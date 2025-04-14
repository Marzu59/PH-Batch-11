
const getCardformloclstorage = ()=>{
   const storageString = localStorage.getItem('cart')
    if(storageString){
        const storedCart = JSON.parse(storageString)
        return storedCart
    }
    return []
}


const savecardtoloclstorage = (cart)=>{
    const cartstringified = JSON.stringify(cart)
    localStorage.setItem('cart', cartstringified)

}

const additemtoCardLocalsotrage = (id)=>{
    const cart = getCardformloclstorage();
    cart.push(id)
    savecardtoloclstorage(cart)

}

export {getCardformloclstorage, additemtoCardLocalsotrage}