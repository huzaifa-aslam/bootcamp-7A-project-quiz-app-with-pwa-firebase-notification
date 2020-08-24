import React from 'react'
interface scoreTypes{
    userscore:number
    userName:string
    totalQuestion:number

}


export const Score = ({userscore,userName,totalQuestion}:scoreTypes) => {
    return (
        <div>
            <h1>{ userName} your score is {userscore} out of {totalQuestion}</h1>
        </div>
    )
}
