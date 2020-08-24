export interface nameTypes{

    getNameFunc:(ans:string)=>void
}

export interface questionType {
    category: string
type: string
difficulty: string
question: string
correct_answer: string
incorrect_answers: string[]
}

export interface quizType{
question: string
correct_answer: string
options: string[]
}