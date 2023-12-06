import React, { useState } from "react";

const Display = (props) => {

    const { studentBelt, setStudentBelt } = props;


    const deleteStudentById = (id) => {

        setStudentBelt(studentBelt.filter((student,index) => student.id !== id));

    }


    return (
        <>

            <h1>Hello</h1>
            {
                studentBelt.map((student, index) => {
                    return (
                        <div key={index} style={{
                            display: "flex",
                            justifyContent: "space-evenly",

                        }}>
                            <p>{student.toDo} </p>
                            <p> {student.belt}</p>
                            {/* <p className={toDo.isCompleted? "completed": ""}>{toDo.content} </p> */}
                            <input type="checkbox"
                            onChange={()=> hand}
                                checked={student.toDo.checked}
                                
                             
                            />
                            
                            <button onClick={(e) => deleteStudentById(student.id)}>Delete</button>
                        </div>

                                            

                    )
                }
                )}
        </>
    )

}

export default Display;