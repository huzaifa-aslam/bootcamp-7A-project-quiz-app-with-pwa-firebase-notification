import React,{useState,useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import {Name} from './components'
import {service} from './services/service'
import QuestionCard from './components/QuestionCard'
import {quizType} from './types/types'
import {Score} from './components/Score'

function App() {

  // const scoreDiv=<Score/>
  let [name,setName]=useState('')
  const [showNext,setShowNext]=useState(false)
  const [questionComplete,setquestionComplete]=useState(false)
  const [question,setQuestion]=useState<quizType[]>([])
  let [nextQuestion,setNextQuestion]=useState(0)
  let [score,setScore]=useState<number>(0)
  // let [mode,setMode]=useState('Offline')

  useEffect(()=>{
   async function fetchData(){
     const questions:quizType[]= await service(5,'easy')
     setQuestion(questions)

     localStorage.setItem("getOfflineData",JSON.stringify(questions))
     if(questions.length<0){

       const test:any=localStorage.getItem("getOfflineData")
        console.log("offline",JSON.parse(test))
         setQuestion(JSON.parse(test))
     }


  // const url=`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`;
  // fetch(url).then((resp)=>{
  //   resp.json().then(({results})=>{
  //     setQuestion(results)
  //   })
  // })



    //  if(!question.length){
      // setMode('Offline')
      //  let getOfflineData:quizType[]=localStorage.getItem("getOfflineData")
      //  setQuestion(getOfflineData)
    //  }

    //  console.log("questions",questions)
   }
   fetchData()
  },[])


function getName(uName:string){
  // console.log(uName)
  setName(uName)
  console.log(uName)

  setShowNext(true)




}

function handleSubmit(e:React.FormEvent<EventTarget>,selectedAnswer:string){
  e.preventDefault()
  if(selectedAnswer===question[nextQuestion].correct_answer){
    setScore(++score)
  console.log("score",score)

  }
  if(nextQuestion!==question.length-1){


    setNextQuestion(++nextQuestion)
    console.log(selectedAnswer)

  }
  else
  {
    setquestionComplete(true)
  }




}

// if(!question.length){

//   // setMode("Offline")
// return <h4 className="loader">Loading....</h4>
// }

  return (
    <div className="App">
     <h1>Welcome In quiz app</h1>
     {questionComplete ? <Score userscore={score} userName={name} totalQuestion={question.length}/> : ''}
     {!showNext? <Name getNameFunc={getName}/> : ''}
     {showNext ? <QuestionCard currQuestion={question[nextQuestion].question} options={question[nextQuestion].options}  callback={handleSubmit}/> : ''}
    </div>
  );
}

export default App;
