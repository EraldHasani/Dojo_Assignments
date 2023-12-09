import React, { useState } from "react";

const Display = (props) => {

    const {items, setItems}= props 
    const [ isCompleted, setCompleted] = useState()


    const deleteButton = (index) => {

        setItems(items.filter((item) => item.id !== index));

    }

  const changeStatus = (TodoQeDuamTeNdryshojmStatus) => {
    let updatedList = items.map ((toDo) => {
        if( toDo ===TodoQeDuamTeNdryshojmStatus ) {
            let newTodo={...toDo}
            newTodo.isCompleted = !toDo.isCompleted
            return newTodo
        }else{
            return toDo
        }
    })
    setItems(updatedList)
  }
   
    return (
        <>
            {
                items.map((item,index) => {
                    return (
                        <div key={index} style={{
                            display: "flex",
                            justifyContent: "space-evenly",

                        }}>
                          {item.isCompleted ? <p style={{color: "green",textDecoration: "line-through"}}>{item.toDo} </p> : <p style={{color:"red"}}>{item.toDo} </p> }
                            
                            {item.isCompleted ? <input onChange={()=>changeStatus(item)} checked type="checkBox"/> : <input  onChange={()=>changeStatus(item)}  type="checkBox" /> }
                            
                            <button onClick={(e) => deleteButton(item.id)}>Delete</button>
                        </div>

                            

                    )
                }
                )}
        </>
    )

}

export default Display;