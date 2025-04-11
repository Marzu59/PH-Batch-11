import Counter from './counter';
import './App.css'
import Batsman from './batsman';

function App() {
  function handleClick(){
    alert('i am clicked')
  }
  const click2 = (num)=>{
   const newNum = num + 2;
    alert(newNum)
  }
  return (
    <>
    <Batsman></Batsman>
      
      <h1>Vite + React</h1>
    


       <Counter></Counter>

       <button onClick={handleClick}>Click this </button>
         <button onClick={()=>click2(3)} >jogfol</button>
    </>
  )
}

export default App
