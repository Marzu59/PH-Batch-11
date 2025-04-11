import Counter from './counter';
import './App.css'
import Batsman from './batsman';
import Users from './user';
import Friends from './friends';
import { Suspense } from 'react';

const fetchfriends = async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
 return res.json()
}

function App() {
  const friendsPRomise = fetchfriends();
  function handleClick(){
    alert('i am clicked')
  }
  const click2 = (num)=>{
   const newNum = num + 2;
    alert(newNum)
  }
  return (
    <>

    <Suspense fallback={<h3>Friends are comings....</h3>}>
        <Friends friendspromis={friendsPRomise} ></Friends>
    </Suspense>
     


    <Users></Users>
    <Batsman></Batsman>
      
      <h1>Vite + React</h1>
    


       <Counter></Counter>

       <button onClick={handleClick}>Click this </button>
         <button onClick={()=>click2(3)} >jogfol</button>
    </>
  )
}

export default App
