import { useState } from "react"

export default function Counting (){
const [count, setCount ] = useState(0)

const handleAdd =()=>{
const newCount = count +1;
setCount(newCount)

}
const handleReduce =()=>{
const newCount = count -1;
setCount(newCount)

}






return (
<div style={{border:'2px solid green', marginBottom:'20px', padding:'20px' }}>
<h3>Counting :{count}</h3>

<button className="button2" onClick={handleAdd}>Add</button>
<button className="button2" onClick={handleReduce}>Reduce</button>

</div>
)
}