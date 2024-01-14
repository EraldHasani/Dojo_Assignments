import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../App.css";

const DisplayOne = (props) => {
   const { id } = useParams();
   const [poll, setPoll] = useState([{}]);
   const [voted, setVoted] = useState(false);
  

   useEffect(() => {
      axios.get(`http://localhost:9000/api/poll/${id}`)
         .then(res => {
            console.log(res);
            console.log(res.data);
            setPoll(res.data.poll);
         })
         .catch((err) => {
            console.log(err);
         })


   }, [])

   const AddVote1 = (e) => {
      e.preventDefault(); 
      let updatedQuestion =poll;
      updatedQuestion.option1votes += 1;
      console.log(updatedQuestion);
      updatedQuestion.totalvotes += 1;

      let questions = updatedQuestion.questions;
      let option1 = updatedQuestion.option1;
      let option2 = updatedQuestion.option2;
      let option3 = updatedQuestion.option3;
      let option4 = updatedQuestion.option4;
      let AddVote1 = updatedQuestion.option1votes;
      let AddVote2 = updatedQuestion.option2votes;
      let AddVote3 = updatedQuestion.option3votes;
      let AddVote4 = updatedQuestion.option4votes;
      let totalvotes =updatedQuestion.totalvotes;
      axios.put(`http://localhost:9000/api/poll/${id}`, { 
         questions: questions,
         option1 : option1,
          option2: option2,
          option3: option3,
          option4: option4,
          option1votes: AddVote1,
          option2votes: AddVote2,
          option3votes: AddVote3,
          option4votes: AddVote4,
          totalvotes: totalvotes,
 
 
       })
         .then(res => {
            console.log(res);
            console.log(res.data);
            setPoll(res.data.poll);
            setVoted(true);
         })
         .catch((err) => {
            console.log(err);
         })
   }
   
   const AddVote2 = (e) => {
      e.preventDefault(); 
      let updatedQuestion =poll;
      updatedQuestion.option2votes += 1;
      console.log(updatedQuestion);
      updatedQuestion.totalvotes += 1;

      let questions = updatedQuestion.questions;
      let option1 = updatedQuestion.option1;
      let option2 = updatedQuestion.option2;
      let option3 = updatedQuestion.option3;
      let option4 = updatedQuestion.option4;
      let AddVote1 = updatedQuestion.option1votes;
      let AddVote2 = updatedQuestion.option2votes;
      let AddVote3 = updatedQuestion.option3votes;
      let AddVote4 = updatedQuestion.option4votes;
      let totalvotes =updatedQuestion.totalvotes;

      axios.put(`http://localhost:9000/api/poll/${id}`, { 
         questions: questions,
         option1 : option1,
          option2: option2,
          option3: option3,
          option4: option4,
          option1votes: AddVote1,
          option2votes: AddVote2,
          option3votes: AddVote3,
          option4votes: AddVote4,
          totalvotes: totalvotes,
 
 
      })
         .then(res => {
            console.log(res);
            console.log(res.data);
            setPoll(res.data.poll);
            setVoted(true);
         })
         .catch((err) => {
            console.log(err);
         })
   }
   
   const AddVote3 = (e) => {
      e.preventDefault(); 
      let updatedQuestion =poll;
      updatedQuestion.option3votes += 1;
      console.log(updatedQuestion);
      updatedQuestion.totalvotes += 1;

      let questions = updatedQuestion.questions;
      let option1 = updatedQuestion.option1;
      let option2 = updatedQuestion.option2;
      let option3 = updatedQuestion.option3;
      let option4 = updatedQuestion.option4;
      let AddVote1 = updatedQuestion.option1votes;
      let AddVote2 = updatedQuestion.option2votes;
      let AddVote3 = updatedQuestion.option3votes;
      let AddVote4 = updatedQuestion.option4votes;
      let totalvotes =updatedQuestion.totalvotes;

      axios.put(`http://localhost:9000/api/poll/${id}`, {
         questions: questions,
         option1 : option1,
          option2: option2,
          option3: option3,
          option4: option4,
          option1votes: AddVote1,
          option2votes: AddVote2,
          option3votes: AddVote3,
          option4votes: AddVote4,
          totalvotes: totalvotes,


      })
         .then(res => {
            console.log(res);
            console.log(res.data);
            setPoll(res.data.poll);
            setVoted(true);
         })
         .catch((err) => {
            console.log(err);
         })
   }

   const AddVote4 = (e) => {
      e.preventDefault(); 
      let updatedQuestion =poll;
      updatedQuestion.option4votes += 1;
      console.log(updatedQuestion);
      updatedQuestion.totalvotes += 1;

      let questions = updatedQuestion.questions;
      let option1 = updatedQuestion.option1;
      let option2 = updatedQuestion.option2;
      let option3 = updatedQuestion.option3;
      let option4 = updatedQuestion.option4;
      let AddVote1 = updatedQuestion.option1votes;
      let AddVote2 = updatedQuestion.option2votes;
      let AddVote3 = updatedQuestion.option3votes;
      let AddVote4 = updatedQuestion.option4votes;
      let totalvotes =updatedQuestion.totalvotes;
      axios.put(`http://localhost:9000/api/poll/${id}`, {
        questions: questions,
        option1 : option1,
         option2: option2,
         option3: option3,
         option4: option4,
         option1votes: AddVote1,
         option2votes: AddVote2,
         option3votes: AddVote3,
         option4votes: AddVote4,
         totalvotes: totalvotes,



     })
     
         .then(res => {
            console.log(res);
            console.log(res.data);
            setPoll(res.data.poll);
            setVoted(true);
         })
         .catch((err) => {
            console.log(err);
         })
   }
   





   return (

      <div className="container">

         <nav className="fs-2 text-center"> Voting Dojo </nav>
         <Link to="/" > <button className="decoration-none m-4  btn btn-primary " >Back to Home</button></Link>

         {
            voted ? 
            <div className=" ">
            <div >
               <h1 className="text-center m-5  text-decoration-underline ">{poll.questions}</h1>
            <div className="text-center ">
               <p className="btn btn-warning ms-5">{poll.option1}:{poll.option1votes}</p>
               <p  className="btn btn-secondary ms-3">{poll.option2} : {poll.option2votes}</p>
               <p  className="btn btn-info ms-3 ">{poll.option3} : {poll.option3votes}</p>
               <p className="btn btn-success ms-3" >{poll.option4}: {poll.option4votes}</p>
            </div>
         </div>
         </div>:

<div className="d-flex justify-content-evenly ">
            <div className="bodycard ">
               <h1 className="card-titl ms-5" >{poll.questions}</h1>
               <div className="card-header w-50  ms-5">
                  <h4>Vote</h4>
               </div>

               <div className="card-body p-3">
                  <div className="card-textd-flex justify-content-evenly  ">
                     <p className="btn btn-warning ms-5"  onClick={AddVote1}>{poll.option1}</p>
                     <p className="btn btn-secondary ms-3" onClick={AddVote2}>{poll.option2}</p>

                     {
                        poll.option3 ?
                        <p className="btn btn-info ms-3 " onClick={AddVote3}>{poll.option3}</p>
                        : null
                     }
                     {
                        poll.option4 ?
                        <p className="btn btn-success ms-3" onClick={AddVote4}>{poll.option4}</p>
                        : null
                     }
                  
                  </div>
               </div>
            </div>
         </div>

         } 
         
      </div>




   )
}

export default DisplayOne;