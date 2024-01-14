import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

const Form = (props) => {

    const navigate = useNavigate();
    const [questions, setQuestions] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [errors, setErrors] = useState("");

    const navigateBack = () => {
        navigate("/");
    }

    
    const CreatePoll = (e) => {
        e.preventDefault();
    

if ( questions.length < 10 || option1.length < 1 || option2.length < 1) {
    setErrors('Your form has some unsolved issues!')
    }
    
        else {
    axios.post ("http://localhost:9000/api/poll", {
                questions,
                option1,
                option2,
                option3,
                option4,
            })

                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    if (res.data.questions == "AleradyExist") {
                        setErrors(res.data.errors);
                        
                    }
                    setQuestions("");
                    setOption1("");
                    setOption2("");
                    setOption3("");
                    setOption4("");
                    navigateBack();
                    
                })
                .catch(err => {
                    setErrors("Your api has some problems!")
                    console.log(err)
                })
            
        }
    }



    return (
        <div className="  form  px-3">

            <h1 className=" fs-2 text-center"> Voting Dojo </h1>

               <Link to="/" > <button className="decoration-none m-4  btn btn-primary " >Back to Home</button></Link>


               {
                   errors.length > 0 ?
                        <span className="text-danger m-3" >{errors} </span>
                        : null
                }


            <form className="  m-auto d-flex justify-content-evenly bg-secondary-subtle " onSubmit={(e) => CreatePoll(e)}>
          
           

                <div className="m-4">
                    <label className="form-label " > Your Question <span className="text-danger">*</span></label>
                    <textarea className="form-control "  name="text" id="" cols="30" rows="10"  value={questions} onChange={(e) => setQuestions(e.target.value)}></textarea>
                    <button className="btn btn-outline-success customColor m-5">Submit Poll</button>
                   
                </div> 
                {
                    questions.length>0 && questions.length < 10 ?
                        <span className="text-danger m-3" >The question must be 10 characters or longer</span>
                        : null
                }



                <div className="m-4">


                    <div>
                        <label className="m-2"> Option 1 <span className="text-danger ">*</span></label>
                        <input className="form-control" type="text" name="option1"  value={option1} onChange={(e) => setOption1(e.target.value)} />
                    </div>
                    {
                         option1.length < 1 ?
                            <span className="text-danger"> Option 1 is required</span>
                            : null
                    }


                    <div >
                        <label className="m-2"> Option 2 <span className="text-danger">*</span></label>
                        <input className="form-control" type="text" name="option2"   value={option2} onChange={(e) => setOption2(e.target.value)} />
                    </div>
                    {
                        option2.length < 1 ?
                            <span className="text-danger">Option 2 is required</span>
                            : null
                    }

                    <div>
                        <label className="m-2"> Option 3 </label>
                        <input className="form-control" type="text" name="option3" value={option3} onChange={(e) => setOption3(e.target.value)} />
                    </div>


                    <div>
                        <label className="m-2"> Option 4 </label>
                        <input className="form-control" type="text" name="option4" value={option4} onChange={(e) => setOption4(e.target.value)} />
                    </div>  


                </div>

                    


            </form>


        </div>





    )
}

export default Form;