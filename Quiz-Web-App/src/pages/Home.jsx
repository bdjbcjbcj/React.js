import React, { useState,useContext } from 'react'
import { QuizContext } from '../context/quizContext'
import { useNavigate } from 'react-router-dom'

function Home() {
  let [name,setName]=useState("");
  let {dispatch}=useContext(QuizContext);
  let navigate=useNavigate()


  let startQuiz= ()=>{
    if(!name.trim()) return alert("Please Enter your Name")
      dispatch({type:"SET_NAME", payload:name})
    navigate("/quiz")
  }
  return (
     <div className="container text-center mt-5">
        <h1 className="fw-bold mb-4">🚀 React Quiz Challenge</h1>
        <input 
        placeholder="Enter your name" 
        className="form-control w-50 mx-auto mb-3" 
        type="text" 
        autocomplete="off"
        onChange={(e)=>setName(e.target.value)}
        />
        
        <button onClick={startQuiz} className="btn btn-primary btn-lg">Start Quiz</button>
    </div>
  )
}

export default Home