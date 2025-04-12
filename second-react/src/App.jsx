import Counter from './counter';
import './App.css'
import Batsman from './batsman';
import Users from './user';
import Friends from './friends';
import { Suspense } from 'react';
import Posts from './posts';

// const fetchfriends = async ()=>{
//   const res = await fetch('https://jsonplaceholder.typicode.com/users');
//  return res.json()
// }

const fetchPosts =async ()=>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json();
}



function App() {
  const promisePosts = fetchPosts()
  // const friendsPRomise = fetchfriends();

  function handleClick(){
    alert('i am clicked')
  }
  const click2 = (num)=>{
   const newNum = num + 2;
    alert(newNum)
  }
  return (
    <>
         <Suspense fallback={<h4>Posts are loding..</h4>}>
            <Posts postsPromise={promisePosts} ></Posts>
         </Suspense>


    {/* <Suspense fallback={<h3>Friends are comings....</h3>}>
        <Friends friendspromis={friendsPRomise} ></Friends>
    </Suspense> */}
     


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
