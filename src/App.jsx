
import './App.css'
import Counter from './Counter'
import Counting from './Recap'
import User from './User'
import Friends from './Friends'

function App() {

function handleClick (){
alert('button Clicked')

}  

const handleClick2 =()=>{

alert('Error')

}

const button4 =(num)=>{
alert(num+5)
}

const button5 =(numbers)=>{
  alert (numbers -1)
}


  return (
    <>
      
      <h1>React Core Concepts Part-2</h1>
      <Counter></Counter>
      <Counting></Counting>
      <User></User>
      <Friends></Friends>
      <button className='button' onClick={handleClick}>Click Me</button>
      <button className='button' onClick={handleClick2}>Click Me 2</button>
      <button className='button' onClick={()=>{alert('Button Third')}}>Click Me Third</button>
      <button className='button' onClick={()=>button4(10)}>Four</button>
      <button className='button' onClick={()=>button5(1000)}>Five</button>
    </>
  )
}

export default App
