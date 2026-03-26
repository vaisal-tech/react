import React,{useState} from "react";


const ProjectBlog=()=>{

    const [count,setCount] = useState(0)
    return(

        <div>
            <p>count={count}</p>
            <button onClick={()=>setCount(count +1)}>+</button>
            <button onClick={()=>setCount(count-1)}>-</button>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>

    )
}


export default ProjectBlog