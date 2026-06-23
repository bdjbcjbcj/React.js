import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { QuizContext } from '../context/quizContext'


function Result() {
    let {state,dispatch}=useContext(QuizContext)

    let percentage=((state.score / state.questions.length)*100)
    useEffect(()=>{
        let entry={
            name:state.userName,
            score:state.score,
            percentage,
            date:new Date().toLocaleString(),
        }
        let stored=JSON.parse(localStorage.getItem("leaderboard")) || []
        let updated=[...stored, entry]
        updated.sort((a,b)=> b.score - a.score )
        localStorage.setItem("leaderboard",JSON.stringify(updated))
    },[])
  return (
    <div className="container text-center mt-5">
        <div className="card shadow p-5">
            <h2 className="fw-bold mb-3">🎉 Quiz Completed!</h2>
            <h4>{state.userName}, your score is:</h4>
            <h1 className="text-success">{state.score}</h1>
            <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to={"/leaderboard"} className="btn btn-primary">
                   View Leaderboard
                </Link>
                <Link to={"/"} 
                onClick={()=> dispatch({type:"RESET"})}
                className="btn btn-warning">
                    Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Result