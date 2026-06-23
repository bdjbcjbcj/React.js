import React, { useEffect,useContext } from 'react'
import { QuizContext } from '../context/quizContext'
import { useNavigate } from 'react-router-dom'
import Timer from '../componenets/Timer'
import ProgressBar from '../componenets/ProgressBar'
import QuestionCard from '../componenets/QuestionCard'
import useTimer from '../hook/useTimer'


function Quiz() {
    let {state,dispatch}=useContext(QuizContext)
    let {index,questions}=state;
    let navigate=useNavigate();
    let {time,reset}=useTimer(15)

    useEffect(()=>{
        if(time===0){
            dispatch({type:"ANSWER", payload:false})
            reset()
        }
    },[time])

    if(!questions||questions.length === 0){
        return <h2 className='text-center mt-5'>...Loading Questions</h2>
    }
    if(index >= questions.length){
        dispatch({type: "FINISH"})
        navigate("/result")
        return null;
    }

    let current=questions[index]

    let onHandleSelect=(options)=>{
        dispatch({type:"ANSWER", payload: options===current.answer})
        reset();
    }

  return (
    <div className="container mt-4">
        <Timer time={time} />
        <ProgressBar current={index} total={questions.length}/>
        <QuestionCard 
        questions={current.questions}
        options={current.options}
        onSelect={onHandleSelect}
        />       
    </div>
  )
}

export default Quiz