import React from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import { lazy,Suspense } from 'react'
import QuizProvider from './context/quizContext'
import Home from './pages/Home'

import Quiz from './pages/Quiz'
import LeaderBoard from './pages/LeaderBoard'
let Result=lazy(()=>import('./pages/Result'))


function App() {
  return (
    <div>
      <QuizProvider>
      <BrowserRouter>
      <Suspense fallback={<h2 className='text-center mt-5'>...Loading</h2>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/leaderboard' element={<LeaderBoard/>}/>
      </Routes>
      </Suspense>
      </BrowserRouter>
      </QuizProvider>
    </div>
  )
}

export default App