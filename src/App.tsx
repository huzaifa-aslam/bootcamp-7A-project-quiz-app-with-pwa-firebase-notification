import React,{useState,useEffect} from 'react';

// import logo from './logo.svg';
import './App.css';
import {Name} from './components'
import {service} from './services/service'
import QuestionCard from './components/QuestionCard'
import {quizType} from './types/types'
import {Score} from './components/Score'
import {Welcome} from './components/Welcome'

function App() {

  // const scoreDiv=<Score/>
  let [name,setName]=useState('')
  const [showNext,setShowNext]=useState(false)
  const [showWelcome,setShowWelcome]=useState(true)
  const [showScore,setShowScore]=useState(false)
  const [getUserName,setGetUserName]=useState(true)
  const [question,setQuestion]=useState<quizType[] | null>([])
  let [nextQuestion,setNextQuestion]=useState(0)
  let [score,setScore]=useState<number>(0)
  // let [mode,setMode]=useState('Offline')

  useEffect(()=>{
   async function fetchData(){
     const questions:quizType[] | null= await service(5,'easy')
     setQuestion(questions)






  // const url=`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`;

   }
   fetchData()
  },[])

  // useEffect(()=>{
  // const url=`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`;
  // fetch(url).then()



  // },[])




function getName(uName:string){
  // console.log(uName)
  setName(uName)
  console.log(uName)
  setGetUserName(false)

  setShowNext(true)




}

function handleSubmit(e:React.FormEvent<EventTarget>,selectedAnswer:string){
  e.preventDefault()
  if(question && selectedAnswer===question[nextQuestion].correct_answer){
    setScore(++score)
  console.log("score",score)

  }
  if(question &&  nextQuestion!==question.length-1){


    setNextQuestion(++nextQuestion)
    console.log(selectedAnswer)

  }
  else
  {
    // setquestionComplete(true)
    setShowNext(false)
    setShowWelcome(false)
    setShowScore(true)
  }




}

if(question && !question.length){

  // setMode("Offline")
return <h4 className="loader">Loading....</h4>
}

  return (
    <div className="App">
     {showWelcome ? < Welcome/> : ''}
     {showScore ? <Score userscore={score} userName={name} totalQuestion={question && question.length}/> : ''}
     {getUserName ? <Name getNameFunc={getName}/> : ''}
     {showNext ? <QuestionCard currQuestion={question && question[nextQuestion].question} options={question && question[nextQuestion].options}  callback={handleSubmit}/> : ''}
    </div>
  );
}

export default App;
