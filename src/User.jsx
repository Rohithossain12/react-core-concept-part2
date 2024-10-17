import { useEffect, useState } from "react"

export default function User (){
const [users, setUsers] = useState([]);
useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data=> setUsers(data))


} ,[])

return (
<div>
<h2>Users : {users.length}</h2>

</div>


)

}



/*
* 1. declare a state to hold the data
* 2. useEffect with call back and dependency Array
* 3. use fetch load the data
* 4. set loaded  data to state
* 5. display data on the component 
*/ 