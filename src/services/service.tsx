import {questionType,quizType} from './../types/types'
export const service =async (amount:number,difficulty:string): Promise <quizType[]> => {


    const api=await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`)
    const {results}=await api.json()
    const modified:quizType[]=results.map((item : questionType)=>{
        return {
            question:item.question,
            correct_answer:item.correct_answer,
            options:item.incorrect_answers.concat(item.correct_answer)
        }
    })

    console.log(modified)
    return modified
}
