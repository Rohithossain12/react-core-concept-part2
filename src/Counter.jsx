import { useState } from "react"

export default function Counter (){
const [count, setCount] = useState(0)    
const handleAdd= ()=>{
const newCount =count +1;
setCount(newCount)

}
const handReduce= ()=>{
const newCount =count -1;
setCount(newCount)

}




return(
<div style={{border: '2px solid tomato', marginBottom:" 40px", padding:'10px'}}>
<h3>Counter :{count}</h3>
<button className="button2" onClick={handleAdd}>Add</button>
<button className="button2" onClick={handReduce}>Reduce</button>

</div>

)

}