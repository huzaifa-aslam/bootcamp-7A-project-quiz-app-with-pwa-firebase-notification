import React,{useState} from 'react';

export interface questionCardTypes{
  currQuestion:string
  options:string[]
  callback:(e:React.FormEvent<EventTarget>,selectAns:string)=>void
}

export default function QuestionCard({ currQuestion,options,callback}:questionCardTypes) {
const [selectAns,setSelectAns]=useState('')

  return (
    <form onSubmit={(e:React.FormEvent<EventTarget>)=>{callback(e,selectAns)}}>
    <p>{currQuestion}:</p>
    {options.map((item:string,index:number)=>{
        return (
            <div key={index}>

                <input type="radio" id="male" checked={selectAns===item} onChange={(e)=>{setSelectAns(e.target.value)}} required name="gender" value={item}/>
                <label >{item}</label><br/>
            </div>
        )
    })}



    <input type="submit" value="Submit"/>
  </form>
  );
}
