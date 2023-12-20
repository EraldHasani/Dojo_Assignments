import React, {useEffect, useState} from "react";  
import {useNavigate, useParams} from "react-router-dom";


const DisplayOne = (props) => {
    const {studentList, setStudentList} = props;
    
    const [student, setStudent] = useState([{}])
    const {id} = useParams();
    const navigate = useNavigate()
    
    useEffect(()=>{
    	setStudent(studentList.filter(student => student.id === id));
    }, []);
   
    
    
    const deleteStudentById = (idFromBelow) => {
        setStudentList(studentList.filter((student) => student.id !== idFromBelow));
        navigate('/home')
    }
    return(
        <div className="">
            { student.length>0?
            
                student.map((s, index)=>{
                return (
                    <div className="results">
                    <p>Name: {s.name}</p>
                    
                    <p>Favorite Stack: {s.favStack}</p>
                    
                    { s.smart?
                    <p>This student is somehow related to Albert!</p>:
                    <p>Dumb. Just Dumb!</p>
                    }
                    <button onClick={(e)=>deleteStudentById(s.id)}>Delete Student</button>
                </div> 
                )}):
                <p>There are no students</p>
            }
        </div>
            
                
      
    )
}
export default DisplayOne;