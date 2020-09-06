import React from 'react'
interface scoreTypes{
    userscore:number | null
    userName:string
    totalQuestion:number | null

}


export const Score = ({userscore,userName,totalQuestion}:scoreTypes) => {
   if (!userscore) {
       return null
   }

    return (
        <div>
            <h1>{ userName} your score is {userscore} out of {totalQuestion}</h1>
        </div>
    )
}
