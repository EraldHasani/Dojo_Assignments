import React,{useState} from "react";

const Form=( props) => {

    const {studentBelt, setStudentBelt }= props
    const [belt , setBelt] = useState("")
    const [toDo, setToDo]= useState("")


    const createStudent =(e) => {
        e.preventDefault ();
        setStudentBelt([...studentBelt, {
            toDo: toDo,
            belt: belt,
            id: Math.floor(Math.random()*1000).toString()
        }])
        setToDo("");
        setBelt("");
        

     }
     return (
        <>
            <form onSubmit={(e)=>createStudent(e)}>
                <div>
                    <label>To Do: </label>
                    <input type="text"  value={toDo} onChange={(e)=> setToDo(e.target.value)} />
                </div>

                {/* <select value={belt}  onChange={(e)=>setBelt(e.target.value)}>
                    {/* <option default>Select</option>
                <option value="Get MERN black belt.">Get MERN black belt.</option>
                <option value="Get Python black belt.">Get Python black belt.</option>
                <option value="Get C# yellow belt.">Get C# yellow belt.</option>

                </select> */} 
                <button type="submit"> Add</button>


            

            </form>




        </>
    )
}

export default Form;