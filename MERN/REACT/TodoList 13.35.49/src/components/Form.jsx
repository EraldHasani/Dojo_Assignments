import React,{useState} from "react";

const Form=( props) => {

    const {items, setItems }= props 
    const [toDo, setToDo]= useState("")
    const [ isCompleted, setCompleted] = useState(false)



    const handleButton =(e) => {
        e.preventDefault ();
        setItems([...items, {
            toDo: toDo,
            id: Math.floor(Math.random()*1000).toString(),
           isCompleted: isCompleted,
        }])
        setToDo("");        

     }
     return (
        <>
            <form onSubmit={(e)=>handleButton(e)}>
                <div>
                    <label>To Do: </label>
                    <input type="text"  value={toDo} onChange={(e)=> setToDo(e.target.value)} />
                </div>

                <button type="submit"> Add</button>


            

            </form>




        </>
    )
}

export default Form;