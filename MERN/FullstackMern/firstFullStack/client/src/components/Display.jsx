import React, {useEffect} from "react";  
import { Link } from "react-router-dom";
import axios from "axios";

const Display = (props) => {
    const {studentList, setStudentList}= props;
    useEffect(()=>{
        axios.get("http://localhost:8000/api/people")
        .then((res)=>{
        console.log(res.data);
        setStudentList(res.data.results);
        console.log('My student list below after setting it from the db')
        console.log(studentList)
    })
        .catch((err)=>{
              console.log(err);
        })
      }, [])
    const deleteStudentById = (idFromBelow) => {

        setStudentList(studentList.filter((student, index) => student.id !== idFromBelow));
    }
    
    return(
            <div className="resultDiv">
                <h2>Here are all the students: </h2>

                {
                    studentList.length>0?
                    studentList.map((student, index)=>{
                        return(
                            <div className="results" key={index}>
                                <p>Name:</p>
                                <Link to={`/student/${student.id}`}> {student.firstName}</Link>
                                <p>Favorite Stack: {student.favStack}</p>
                                
                                { student.smart?
                                <p>This student is somehow related to Albert!</p>:
                                <p>Dumb. Just Dumb!</p>
                                }
                                {/* <button onClick={(e)=>deleteStudentById(student.id)}>Delete Student</button> */}
                            </div>
                        )
                    }
                ):
                <div>

                    <p>There are no students yet!</p>              
                    <Link to="/student/add">Create One</Link>
                </div>
                }
            </div>
    )
}
export default Display;