import { useState } from 'react'
import './App.css'

function App() {
  // const EventCount=()=>{
  //   alert('hello')
  // }
  return (
    <>
     <h1>React Alert Using Events</h1>
     <button type='button' onClick={()=>alert('Button Clicked')}>Click Me</button>
     {/* or <button onClick={EventCount}>click</button> */}
    </>
  )
}


function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Increment,Decrement</h1>
      <h2>{count}</h2>

      {count > 0 ? (
        <button onClick={decrement} style={{ padding: '10px 20px', margin: '5px' }}>
          Decrement
        </button>
      ) : (
        <button
          
          style={{ padding: '10px 20px', margin: '5px', cursor: 'not-allowed', opacity: 0.5 }}
        >
          Decrement
        </button>
      )}
      <button onClick={increment} style={{ padding: '10px 20px', margin: '5px' }}>
        Increment
      </button>
    </div>
  )
}

export {App, CounterApp};



