import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import { BsFillPieChartFill } from "react-icons/bs";

import "../App.css";

const Display = (props) => {


    const [polls, setPolls] = useState([{}]);
    const [top3Polls, setTop3Polls] = useState([{}]);


    useEffect(() => {
        axios.get("http://localhost:9000/api/polls")
            .then(res => {
                console.log(res);
                console.log(res.data);
                setPolls(res.data.polls);
            })
            .catch((err) => {
                console.log(err);
            })

        axios.get("http://localhost:9000/api/polls/top3")
            .then(res => {
                console.log(res);
                console.log(res.data);
                setTop3Polls(res.data.polls);
            })
            .catch((err) => {
                console.log(err);
            })

    }, [])

    const filterPollsByStatus = (polls, status) => {
        return polls.filter(poll => poll.status === status);
    }





    return (

        <div className="card w-100">



            <h3 className="navbar2  text-center"> Voting Dojo </h3>

            <Link to="/api/polls/new" > <button className="decoration-none m-4  btn btn-primary " >Create your own Poll</button></Link>

            <div className="d-flex justify-content-evenly ">

                <div className="card m-5 bg-secondary">

                <h1 >Top 3 Polls</h1>

                    {top3Polls.length > 0 ? (

                        top3Polls.map((poll, index) => (
                            <div className="  d-flex justify-content-flex-start border w-100  rounded-start-2 bg-light  m-3" key={index}>


                                <h2 className="icon"><BsFillPieChartFill /> </h2>


                                <div >
                                    <h1 className=" mt-2 "> <Link to={`/api/polls/${poll._id}`} > {poll.questions} </Link> </h1>
                                    <div className="d-flex justify-content-evenly">
                                        <p > {poll.option1}:{poll.option1votes}; </p>
                                        <p > {poll.option2}:{poll.option2votes}; </p>
                                        <p> {poll.option3}: {poll.option3votes}</p>
                                           <p> {poll.option4}: {poll.option4votes}</p>    
                                       
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <p>No polls available</p>
                    )}


                    <div>  </div>
                    <div>  </div>
                    <div>  </div>


                </div>

                <div className="card m-5 bg-secondary">
                    <h1> Recent Polls </h1>

                    {polls.length > 0 ? (

                        polls.map((poll, index) => (
                            <div className="  d-flex justify-content-flex-start border rounded-start-2 bg-light w-100  m-3" key={index}>


                                <h2 className="icon "><BsFillPieChartFill /> </h2>


                                <div  >
                                    <h1 className=" mt-2 "> <Link to={`/api/polls/${poll._id}`} > {poll.questions} </Link> </h1>
                                    <div className="d-flex justify-content-evenly">
                                        <p>{poll.option1}:{poll.option1votes}; </p>
                                        <p>{poll.option2}:{poll.option2votes}; </p>
                                        {
                                            poll.option3 ?
                                                <p>{poll.option3}:{poll.option3votes}; </p>
                                                : null
                                        }

                                        {
                                            poll.option4 ?
                                                <p>{poll.option4}:{poll.option4votes}; </p>
                                                : null
                                        }                                        
                                    



                                
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                            <p>No polls available</p>
                        
                    )}
                </div>

            </div>




        </div>




    )
}

export default Display;