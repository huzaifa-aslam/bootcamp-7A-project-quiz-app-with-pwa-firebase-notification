import {questionType,quizType} from './../types/types'
export const shuffleArray=(array:any[])=>[...array].sort(()=>Math.random()-0.5)

export const service =async (amount:number,difficulty:string): Promise <quizType[]> => {


    const api=await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
    const {results}=await api.json()
    const modified:quizType[]=results.map((item : questionType)=>{
        return {
            question:item.question,
            correct_answer:item.correct_answer,
            options:shuffleArray(item.incorrect_answers.concat(item.correct_answer))
        }
    })

    // console.log(modified)
    // localStorage.setItem("getOfflineData",JSON.stringify(modified))
    // const test:any=localStorage.getItem("getOfflineData")
    // console.log('offline',JSON.parse(test))
    // if(results===''){
    //     console.log('offline',JSON.parse(test))
    //     return JSON.parse(test)
    // }
    return modified
}

// export const servide2=()=>{
//     const url=`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`;
//     fetch(url).then((resp)=>{
//         resp.json().then(({results})=>{
//             console.log("servise2",results);
//             const modified:quizType[]=results.map((item : questionType)=>{
//                 return {
//                     question:item.question,
//                     correct_answer:item.correct_answer,
//                     options:shuffleArray(item.incorrect_answers.concat(item.correct_answer))
//                 }

//         })
//     })

// }
// servide2()
